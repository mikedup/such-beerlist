// BASE SETUP

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// config files
var db = require('./config/db');


// Connect Mongo db
mongoose.connect(db.url);


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port


// Static directory
app.use(express.static(__dirname + '/public'));


// ROUTES FOR OUR API
require('./app/routes')(app); // configure our routes


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);