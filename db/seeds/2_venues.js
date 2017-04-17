
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          name: 'The Jangle Barn',
          capacity: 7,
          address_line_1: '123 Faker St.',
          address_line_2: 'Suite # 2',
          city: 'Seattle',
          state: 'WA',
          zip: 23455
        },
        {
          id: 2,
          name: 'Hotel Generico',
          capacity: 8,
          address_line_1: '185400 Phraker Ave.',
          address_line_2: 'Main Ballroom',
          city: 'Boston',
          state: 'MA',
          zip: 01215
        }
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('venues_id_seq', (SELECT MAX(id) FROM venues));"
      )
    });
};
