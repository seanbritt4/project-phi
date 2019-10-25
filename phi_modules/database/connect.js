var mysql = require('mysql');
// var path = '/*run "heroku config:get JAWSDB_URL", copy and paste here*/';

var db = mysql.createConnection(path);

db.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    } else console.log('database connected');
});


// db.select('SELECT 1 + 1 As solution');
module.exports = db;
