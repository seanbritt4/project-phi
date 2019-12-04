var mysql = require('mysql');
var path = process.env.JAWSDB_CYAN_URL;

var db = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "yc3uldesp6v70z2p",
  password: "r3vfprhc7175k3y8",
  database: "fj25bwb9slh2elgz"
});

db.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    } else console.log('database connected');
});


// db.select('SELECT 1 + 1 As solution');
module.exports = db;
