
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return knex.raw("SET datestyle = ymd;")
    }).then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: 'Rock concert',
          description: 'Rock n roll all night and party every day!!!!!',
          start_time: '2017-04-22 18:00:00',
          end_time: '2017-04-22 20:00:00',
          venue_id: 1
        },
        {
          id: 2,
          title: 'Keynote Speaker',
          description: 'Boring and probably informative but definitely overpriced.',
          start_time: '2017-12-12 08:00:00',
          end_time: '2017-12-22 14:00:00',
          venue_id: 2
        },
        {
          id: 3,
          title: 'Corporate birthday party',
          description: 'Gag me with a spoon',
          start_time: '2017-06-12 19:00:00',
          end_time: '2017-06-12 21:00:00',
          venue_id: 2
        },
        {
          id: 4,
          title: 'DONT LOOK AT ME I SHOULD NOT BE HERE',
          description: 'Does not matter',
          start_time: '2017-04-01 19:00:00',
          end_time: '2017-04-01 21:00:00',
          venue_id: 3
        }
      ]);
    });
};
