// VENUES
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('capacity').notNullable().defaultTo(0);
    table.string('address_line_1').notNullable();
    table.string('address_line_2');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues')
};
