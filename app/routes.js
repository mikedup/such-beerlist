var express    = require('express');    // call express
var router     = express.Router();        // get an instance of the express Router
var request    = require('request');

// Models
var Beer = require('./models/beer');


module.exports = function(app) {

  // middleware to use for all requests
  router.use(function (req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
  });

  // API Routes
  router.route('/api/beers')

    // create a bear (accessed at POST http://localhost:8080/api/beers)
    .post(function (req, res) {
      var beer = new Beer();    // create a new instance of the Beer model
      console.log(req.body);
      beer.data = req.body;  // set the beer data object (comes from the request)

      // save the beer and check for errors
      beer.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Beer Added!' });
      });
      
    })

    // get all the bears (accessed at GET http://localhost:8080/api/beers)
    .get(function (req, res) {
      Beer.find(function(err, beers) {
        if (err)
          res.send(err);

        res.json(beers);
      });
    });


  // on routes that end in /beers/:beer_id
  router.route('/api/beers/:beer_id')

    // get the beer with that id (accessed at GET http://localhost:8080/api/beers/:beer_id)
    .get(function (req, res) {
      Beer.findById(req.params.beer_id, function (err, beer) {
        if (err)
          res.send(err);
        res.json(beer);
      });
    })

    .put(function (req,res) {
      Beer.findById(req.params.beer_id, function (err, beer) {
        if (err)
          res.send(err);

        beer.name = req.body.name; // Update the beer's name

        // Save the beer 
        beer.save(function (err) {
          if (err)
            res.send(err);

          res.json({ message: 'Beer updated!' });
        });
      });
    })

    .delete(function (req, res) {
      Beer.findById(req.params.beer_id, function (err, beer) {
        // Remove beer
        Beer.remove({
          _id: req.params.beer_id
        }, function (err, beer) {
          if (err)
            res.send(err);
        });

        // Return update beer list
        Beer.find(function(err, beers) {
          if (err)
            res.send(err);

          res.json(beers);
        });
      });
    });


  // BreweryDB
  var breweryDatabaseUrl = 'http://api.brewerydb.com/v2/beers/?key=e765ef0a2337404434096dba9d085440';
  app.get('/beers', function(req, res, next) {
    request(breweryDatabaseUrl, function (err, response, body) {
      res.send(body);
    });
  });


  // Frontend route
  app.get('/', function (req, res) {
      res.sendfile('./public/index.html'); // load our public/index.html file
    });


  // REGISTER OUR ROUTES 
  app.use(router);
}