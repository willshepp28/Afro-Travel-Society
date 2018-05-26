
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', (table) => {
        table.increments();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('about').notNullable();
        table.string('email').notNullable();
        table.string('profilePic').notNullable().defaultTo('http://cas.nyu.edu/content/nyu-as/cas/newstudents/college-cohort-program/freshman-year/2016-2017-college-leaders/_jcr_content/par/columncontrol_379702044/parcol1/image.img.png/1488560657847.png');
        table.integer('age').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('username').notNullable();
        table.text('password').notNullable()
    })

    .createTable('activites', (table) => {
        table.increments();
        table.text('title').notNullable();
        table.text('description').notNullable();
        table.string('starting_point').notNullable();
        table.string('destination').notNullable();
        table.string('start').notNullable();
        table.string('end').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.timestamp('date_created').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
