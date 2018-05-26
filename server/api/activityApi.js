const router = require('express').Router();
knex = require('../db/knex.js');


router.get('/', (request, response) => {



    return knex.select()
        .from('activites')
        .then((activity) => {
            response.status(200).json(activity)
        })
});


module.exports = router;