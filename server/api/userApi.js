const router = require('express').Router();
const moment = require('moment');
knex = require('../db/knex.js');


router.get('/', (request, response) => {

    var day = moment().format();

    console.log(moment().format());

    return knex.select()
        .from('users')
        .then((user) => {
            response.status(200).json(user)
        })
});


module.exports = router;
