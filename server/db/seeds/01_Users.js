const crypto = require('crypto');

var encrypt = function(password){
  return crypto.pbkdf2Sync(password, 'salt', 10, 512, 'sha512')
  .toString('base64');
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { firstname: 'Will', lastname: 'Sheppard', about: 'I love to travel and have fun', email: 'willshepp54@gmail.com', age: 32, city: 'Atlanta', state: 'GA', username: 'willTheGreat', password: encrypt('123')},
        { firstname: 'John', lastname: 'Blaze', about: 'Getting money, and chilling', email: 'johnb@outlook.com', age: 35, city: 'Miami', state: 'FL', username: 'theMann', password: encrypt('222')},
        { firstname: 'Jasmine', lastname: 'Greene', about: 'Seeing the world is my passion', email: 'jgreene@gmail.com', age: 28, city: 'New York', state: 'NY', username: 'jasmine12', password: encrypt('444')},
        { firstname: 'Antionio', lastname: 'Smalls', about: '', email: 'antioniotheboss@gmail.com', age: 25, city: 'Washington', state: 'DC', username: 'antdog6', password: encrypt('888')}
      ]);
    });
};


