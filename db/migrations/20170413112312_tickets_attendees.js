// TICKETS_ATTENDEES
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets_attendees', (table) => {
    table.increments();
    table.integer('ticket_id');
    table.integer('attendee_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets_attendees');
};
