var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//include environmental variables (db url)
const dotenv = require('dotenv');
dotenv.config();

var bparser = require('body-parser');   //use to convert json body to strings when needed
var indexRouter = require('./routes/index');    //index.js
var usersRouter = require('./routes/users');    //users.js
var inputRouter = require('./routes/input');    //about.js
var app = express();

console.log('ATTN: nn is not connected');

var be_manager = require('./phi_modules/module_manager.js');
app.use(bparser.json());
app.post('/', function(req, res){
    var body;
    body = req.body;
    var obj = {};
    obj.num_songs = 10;
    //debugging, see data recv'd from front end
    console.log('app, body:', body)

    // send data to nn
    be_manager.main(body);

    // obj.returninfo = be_manager.main(body); //send data to phi_modules/module_manager.js
    console.log('returninfo: ', obj.returninfo)
    JSON.stringify(returninfo)
    console.log('returninfo: ', obj)
    res.send(obj);
    next();
});

app.get('input', function(req, res){
//     inputRouter();

    console.log('here, get BEasdl');
    res.send('input');
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
app.use('/input', inputRouter);
// app.use('/users', usersRouter);


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
