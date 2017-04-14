// EVENTS
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description').defaultTo('');
    table.dateTime('start_time').notNullable();
    table.dateTime('end_time').notNullable();
    table.integer('venue_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
