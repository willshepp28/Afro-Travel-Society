
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activites').del()
    .then(function () {
      // Inserts seed entries
      return knex('activites').insert([
       { title: 'Lets go to Atlanta', description: 'Really want to take a trip to atlanta. Anyone welcome to join', starting_point: 'Washington,DC', destination: 'Atlanta, GA', start: '5/12/18', end: '5/15/18', user_id: 1 },
       { title: 'Road trip to the Big Apple', description: 'I wanna see the fast life. Lets go to the big apple', starting_point: 'Miami,FL', destination: 'New York,NY', start: '6/2/18', end: '6/5/18', user_id: 3 },
       { title: 'Cruise to the Queen City', description: 'Lets take a trip to Charlotte. And cruise the city', starting_point: 'Columbia,SC', destination: 'Charlotte,NC', start: '7/17/18', end: '7/22/18', user_id: 4 }
      ]);
    });
};


// .createTable('activites', (table) => {
//   table.increments();
//   table.text('title').notNullable();
//   table.text('description').notNullable();
//   table.string('starting_point').notNullable();
//   table.string('destination').notNullable();
//   table.string('start').notNullable();
//   table.string('end').notNullable();
//   table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
//   table.timestamp('date_created').defaultTo(knex.fn.now());
// })