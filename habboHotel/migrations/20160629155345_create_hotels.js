
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hotels', function(table) {
    table.increments()
    table.string('name')
    table.string('address')
    table.string('city')
    table.string('state')
    table.string('website')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hotels')
};
