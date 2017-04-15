
exports.up = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.boolean('over_21').defaultTo('false')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.dropColumn('over_21')
  })
};
