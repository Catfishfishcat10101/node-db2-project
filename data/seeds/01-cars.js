// STRETCH
const cars = [
    {
        vin: '5TFRT541X8X000928',
        make: 'kia',
        model: 'stinger',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1GKDS13S962231267',
        make: 'volkswagen',
        model: 'golf',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1G8AF52FX4Z135192',
        make: 'honda',
        model: 'civic',
        mileage: 250000,
        title: 'salvage',
        transmission: 'automatic'
    },
]



exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}