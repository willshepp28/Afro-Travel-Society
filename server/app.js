/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  morgan = require('morgan'),
  userApi = require('./api/userApi'),
  activityApi = require('./api/activityApi'),
  port = process.env.PORT || 8000;
application = express();



/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/

application.use(morgan('dev'));
// application.use(morgan('combined'))


// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
application.use(bodyParser.json());



// Express will allow requests from port 8080
// 8080 needs access to our json data
application.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}));










/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/


// Api
application.use('/api/v1/user', userApi);
application.use('/api/v1/activities', activityApi);





/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
application.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
