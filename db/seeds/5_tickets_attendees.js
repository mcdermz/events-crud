
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets_attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets_attendees').insert([
        {id: 1, ticket_id: 1, attendee_id: 1},
        {id: 2, ticket_id: 1, attendee_id: 2},
        {id: 3, ticket_id: 1, attendee_id: 1},
        {id: 4, ticket_id: 1, attendee_id: 2},
        {id: 5, ticket_id: 2, attendee_id: 1},
        {id: 6, ticket_id: 2, attendee_id: 1},
        {id: 7, ticket_id: 2, attendee_id: 2},
        {id: 8, ticket_id: 3, attendee_id: 1},
        {id: 9, ticket_id: 3, attendee_id: 2},
        {id: 10, ticket_id: 4, attendee_id: 1},
        {id: 11, ticket_id: 4, attendee_id: 2},
        {id: 12, ticket_id: 4, attendee_id: 1},
        {id: 13, ticket_id: 4, attendee_id: 2}
      ]);
    });
};
