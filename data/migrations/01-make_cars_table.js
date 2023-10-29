exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 17).notNullable().unique();
    table.string('make', 32).notNullable();
    table.string('model', 32).notNullable();
    table.integer('mileage').unsigned().notNullable();
    table.string('title', 16).defaultTo('clean');
    table.string('transmission', 16).defaultTo('automatic');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};