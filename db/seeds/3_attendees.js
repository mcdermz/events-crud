
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendees').insert([
        {
          id: 1,
          pref_name: 'Joe',
          last_name: 'Shmoe',
          birthday: '12/31/1988',
          email: 'joeshmoe@what.com'
        },
        {
          id: 2,
          pref_name: 'Jill',
          last_name: 'Jabowski',
          birthday: '04/25/1978',
          email: 'jill@jab.com'
        },
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('attendees_id_seq', (SELECT MAX(id) FROM attendees));"
      )
    });
};
