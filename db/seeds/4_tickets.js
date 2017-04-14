
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1,
          name: 'General admission',
          price: 45,
          event_id: 1
        },
        {
          id: 2,
          name: 'VIP',
          price: 90,
          event_id: 1
        },
        {
          id: 3,
          name: 'VIP',
          price: 500,
          event_id: 2
        },
        {
          id: 4,
          name: 'General admission',
          price: 14,
          event_id: 3
        }
      ]);
    });
};
