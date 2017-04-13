// TICKETS
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('price').notNullable();
    table.integer('event_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
