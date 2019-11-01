var spotify = require('./connect');

//recieves data, makes N number of calls to DB, sending array of
//  songs back to web page
exports.main = function(body, num_songs){
// exports.main = function(body, num_songs){
    console.log('in spotify main');
    spotify.connectPhi();
    // console.log('spotify.sendData:', body);
}
