var mysql = require('mysql');
// var path = '/*run "heroku config:get JAWSDB_CYAN_URL", copy and paste here*/';
// var path = 'mysql://yc3uldesp6v70z2p:r3vfprhc7175k3y8@s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fj25bwb9slh2elgz';
var path = process.env.JAWSDB_CYAN_URL;

var db = mysql.createConnection(path);

db.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    } else console.log('database connected');
});


// db.select('SELECT 1 + 1 As solution');
module.exports = db;
