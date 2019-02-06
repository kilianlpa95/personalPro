// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./controllers/user');
var loginController = require('./controllers/login');
var empController = require('./controllers/emp');
var passport = require('passport');
//var fs = require('fs');
//var authController = require('./controllers/auth');

// Connect to the users MongoDB
//mongoose.connect('mongodb://localhost:27017/users');
mongoose.connect('mongodb://localhost:27017/emps');

// Create our Express application
var app = express();

// Use the passport package in our application
app.use(passport.initialize());

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Manage size limits
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

// CORS Access management
app.use(function(req, res, next){
  /* Allow access from any requesting client */
  res.setHeader('Access-Control-Allow-Origin', '*');

  /* Allow access for any of the following Http request types */
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

  /* Set the Http request header */
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

// Create our Express router
var router = express.Router();

// Endpoints Employees CRUD
router.route('/emp')
  .get(/*authController.isAuthenticated,*/ empController.getEmps)
  .post(/*authController.isAuthenticated,*/ empController.postEmp)

// Endpoints Employees CRUD
router.route('/emp/:emp_id')
  .get(/*authController.isAuthenticated,*/ empController.getEmp)
  .put(/*authController.isAuthenticated,*/ empController.putEmp)
  .delete(/*authController.isAuthenticated,*/ empController.deleteEmp);

// Create endpoint handlers for /users
router.route('/users')
  .post(/*authController.isAuthenticated,*/ userController.postUsers)
  .get(/*authController.isAuthenticated,*/ userController.getUsers);

// Create endpoint handlers for /users/:user_id
router.route('/users/:user_id')
  .get(/*authController.isAuthenticated,*/ userController.getUser)
  .put(/*authController.isAuthenticated,*/ userController.putUser)
  .delete(/*authController.isAuthenticated,*/ userController.deleteUser);

// Create endpoint handlers for /logins
router.route('/logins')
  .post(loginController.postLogins)
  .get(/*authController.isAuthenticated,*/ loginController.getLogins);

// Register all our routes with /api
app.use('/api', router);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);
console.log('Listening on port ' + port);