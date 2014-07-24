var express    = require('express');    // call express

// Models
var Beer     = require('./models/beer');


module.exports = function(app) {

  var router = express.Router(); 				// get an instance of the express Router

  // middleware to use for all requests
  router.use(function (req, res, next) {
    // do logging
    console.log('Middleware used for authentication');
    next(); // make sure we go to the next routes and don't stop here
  });


  // API Routes
  router.route('/beers')

    // create a bear (accessed at POST http://localhost:8080/api/beers)
    .post(function (req, res) {
      
      var beer = new Beer();    // create a new instance of the Beer model
      console.log(req.body);
      beer.name = req.body.name;  // set the beers name (comes from the request)

      // save the beer and check for errors
      beer.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Beer created!' });
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
  router.route('/beers/:beer_id')

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
        Beer.remove({
          _id: req.params.beer_id
        }, function (err, beer) {
          if (err)
            res.send(err);
          res.json({ message: 'Beer successfully deleted!' });
        });
      });
    });


  // REGISTER OUR ROUTES 
  // all of our routes will be prefixed with /api
  app.use('/api', router);


  // Frontend routes
  router.get('/', function(req, res) {
      res.sendfile('./public/index.html'); 
  });
}