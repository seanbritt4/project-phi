var db = require('../database/queries.js');

//recieves data, makes N number of calls to DB, sending array of
//  songs back to web page
exports.main = function(body){
    console.log('spotify.sendData:', body);
    db.test(body);
}
