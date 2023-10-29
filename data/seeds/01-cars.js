// STRETCH
const cars = [
    {
        vin: '1B4HS28Z6YF200995',
        make: 'Honda',
        model: 'Civic',
        mileage: 67500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '5N1BV28U46N186646',
        make: 'Honda',
        model: 'Accord',
        mileage: 88500,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '1GTSKTEA7AZ271320',
        make: 'GMC',
        model: 'Seirra',
        mileage: 210000,

    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}