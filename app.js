var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//include environmental variables (db url, spotify api info)
const dotenv = require('dotenv');
dotenv.config();

var bparser = require('body-parser');   //use to convert json body to strings when needed
var indexRouter = require('./routes/index');          //index.js
var usersRouter = require('./routes/users');          //users.js
// var playlistRouter = require('./routes/playlist');    //playlist output
var app = express();

/*
    NOTE:
    when including our own files from other directories,
    filepaths should look like this:
        './path/to/file'
*/

console.log('id:', process.env.CLIENTID);
console.log('secret:', process.env.CLIENTSECRET);
console.log('url:', process.env.JAWSDB_CYAN_URL);

var be_manager = require('./phi_modules/module_manager.js');
app.use(bparser.json());
var body;
app.post('/', function(req, res){
    var obj = {};
    body = req.body;
    //debugging, see data recv'd from front end
    console.log('app, body:', body)

    var returninfo = be_manager.main(body); //send data to phi_modules/module_manager.js
    console.log('returninfo: ', returninfo)
    JSON.stringify(returninfo)
    console.log('returninfo: ', returninfo)
    res.send(returninfo);
    // res.send(req.body);
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

/*send playlist to playlist.hbs file?*/
// app.use('./playlist', playlistRouter);
// app.use(function(req,res,next){
//
// })


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
