var spotify = require('./connect.js');

//recieves data, makes N number of calls to DB, sending array of
//  songs back to web page
exports.main = function(body, num_songs){

    /* TRIED PASSING FUNCTION, HOPING TO MAKE CALLS THAT WAY... WILL COME BACK TO THIS
    spotify.connect(function(){
        // console.log('sAPI:', spotifyApi);
        console.log(spotifyApi['_credentials'].accessToken);

        spotifyApi
        .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then(
            function(data) {
                console.log('Artist albums', data.body);
            },
            function(err) {
                console.error('error:', err);
            });
    });
    */
    console.log('spotify.sendData:', body);
    // db.test(body);
}
