const Cars = require('./cars-model');
const vin = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const car = await Cars.getById(req.params.id);
    if(car === undefined){
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    }
    else{
      req.car = car;
      next();
    }
  }catch(err){
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const error = {status: 400}
  if(!req.body.vin) error.message = 'vin is missing';
  if(!req.body.make) error.message = 'make is missing';
  if(!req.body.model) error.message = 'model is missing';
  if(!req.body.mileage) error.message = 'mileage is missing';

  if(error.message) next(error);
  else next();
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if(vin.validate(req.body.vin)){
    next();
  }else{
    next({
      status: 400, 
      message: `vin ${req.body.vin} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const existingCar = await Cars.getByVin(req.body.vin);
    if(existingCar){
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`
      })
    } 
    else next();

  }
  catch(err){
    next(err);
  }
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}