// DO YOUR MAGIC
const express = require('express');

const router = express.Router();

const Cars = require('./cars-model');

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try{
        const data = await Cars.getAll();
        res.json(data);
    }catch(err){
        next(err);
    }
    
})
router.get('/:id', checkCarId, async (req, res, next) => { //eslint-disable-line
    res.json(req.car);
})


router.post('/', 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique, 
    async (req, res, next) => {
        try{
            const newCar = await Cars.create(req.body);
            res.json(newCar);
        }
        catch(err){
            next(err);
        }
})





module.exports = router;