// ATTENDEES
'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments();
    table.string('pref_name').notNullable();
    table.string('last_name').notNullable();
    table.date('birthday').notNullable();
    table.string('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees');
};
