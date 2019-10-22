var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bparser = require('body-parser');   //use to convert json body to strings when needed
var indexRouter = require('./routes/index');    //index.js
var usersRouter = require('./routes/users');    //users.js
var app = express();

// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
//
// var $ = jQuery = require('jquery')(window);
//
// $.ajaxSetup({
//     url: "index.hbs"
// });

app.use(bparser.json());
app.post('/', function(req, res){
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body));
    res.send(req.body);
});
// $.get(res, req)

console.log('here, app.js');


/*  spotify login code  */
app.get('/login', function(req, res) {
    console.log('login');
    // var scopes = 'user-read-private user-read-email';
    // res.redirect('https://accounts.spotify.com/authorize' +
    // '?response_type=code' +
    // '&client_id=' + my_client_id +
    // (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    // '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.set('view engine' , 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get('/public/login', function(req, res) {
//     // res.send('hello from app.js');
//     console.log('req:', req);
// });


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
