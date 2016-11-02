const express = require('express');
const app = express();


var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
var port = process.env.PORT || 8080;  
var router = express.Router(); 


//Models
var User   = require('./app/models/user');
var Bar = require('./app/models/bar');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hoyqueApp');
app.set('superSecret', 'usedToVerifyJWT'); 





router.post('/authenticate', function(req, res) {
  // find the user
  User.findOne({
    email: req.body.email
  }, function(err, user) {

    if (err) throw err;
    if (!user || user.password != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Email or password  are wrong.' });
    } else if (user) {
        // if user is found and password is right
        // create a token 
        //Se remueve el token anterior esto se deberia resolver con un logout
        user.token = ''; 
        //Se remueve el pass para que no se utilize para crear el token
        user.password = '';
        token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: '1440m' // expires in 24 hours
        }); 
        user.token = token;
            user.save(function (err) {
                if(err) {
                    console.error('ERROR!');
                }
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
    }
  });
});


// middleware to use for all requests
router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/token', function(req, res){
   
    User.findOne({
    token: req.body.token
  }, function(err, user) {
       res.json({
          user: user
        });
    });

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


router.route('/users')

    .get(function(req, res) {
        User.find({}, function(err, users) {
            res.json(users);
        });
    });


app.get('/setup', function(req, res) {
  // create a sample user
  var nick = new User({ 
    email: 'jarguedasa@ucenfotec.ac.cr', 
    password: 'password',
    token: '' 
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
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




