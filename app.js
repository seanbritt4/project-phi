var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bparser = require('body-parser');   //use to convert json body to strings when needed
var indexRouter = require('./routes/index');    //index.js
var usersRouter = require('./routes/users');    //users.js
var app = express();

/*
    NOTE:
    when including our own files from other directories,
    filepaths should look like this:
        './path/to/file'
*/

var spotify = require('./phi_modules/spotify_API/spotify_main.js');
app.use(bparser.json());
var body;
app.post('/', function(req, res){
    var obj = {};
    body = JSON.stringify(req.body);
    // console.log('app.js, body:' + body);
    spotify.main(body); //send data to spotify_API/
    res.send(req.body);
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

// app.use('./views/saveindex.hbs', indexRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
