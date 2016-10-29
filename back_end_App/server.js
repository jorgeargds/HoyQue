const express = require('express');
const app = express();


var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;  

//ROUTES PARA NUESTRO API
var router = express.Router(); 

var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hoyqueApp');

var Bar = require('./app/models/bar');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.route('/bar')

    // create a bar (accessed at POST http://localhost:8080/api/bar)
    .post(function(req, res) {
        
        var bar = new Bar();      // create a new instance of the Bar model
        bar.name = req.body.name;  // set the Bar name (comes from the request)

        // save the bar and check for errors
        bar.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bar created!' });
        });
        
    })
     .get(function(req, res) {
        Bar.find(function(err, bars) {
            if (err)
                res.send(err);

            res.json(bars);
        });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port '+ port);




