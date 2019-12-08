var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var spotify = require('spotify-web-api-node')

//include environmental variables (db url)
const dotenv = require('dotenv');
dotenv.config();

var bparser     = require('body-parser');   //use to convert json body to strings when needed
var indexRouter = require('./routes/index');    //index.js
// var inputRouter = require('./routes/input');    //about.js
var app = express();

var be_manager = require('./phi_modules/main.js');
app.use(bparser.json());
var body;

app.post('/', function(req, res){
  body = req.body;

  //debugging, see data recv'd from front end
  console.log('recvd:', body)

  // send data to be used
  console.log('sending...')
  var obj;
  be_manager.main(body)
  .then((a) => Promise.resolve(a))
  .then((a) => {
    var return_info = a()
    res.send(return_info)
  })
});

app.post('/login', (req, res) => {
    body = req.body;

    console.log(body)

    var sp = new spotify({
        clientId: body.username,
        clientSecret: body.secret
    })
    // Create a private playlist
    sp.createPlaylist('My Cool Playlist', { 'public' : false })
      .then(function(data) {
        console.log('Created playlist!');
      }, function(err) {
        console.log('Something went wrong!', err);
      });

      // Add tracks to a specific position in a playlist
      var message;
      sp.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK',
      ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
      { position : 5 })
      .then(function(data) {
          message = 'Added tracks to playlist!'
      }, function(err) {
          message = 'Something went wrong!';
      });

      res.send(message)

})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
