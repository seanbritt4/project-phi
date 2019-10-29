var Spotify = require('spotify-web-api-node');


exports.connect = function(call){
    console.log('in connect sp');
    //project phi info
    var spotifyApi = new Spotify({
        // clientId: '67c9bdb789854efc9b20b4c4c06ca0cb',
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
        // clientSecret: '22132f38bf3e47b794903f9302b5be8e'
    });


    spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        // console.log('sAPI:', spotifyApi);
        // console.log('access token:', spotifyApi['_credentials'].accessToken);
    }, function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    })
    .then(call())
    //     function(){
    //     // console.log('sAPI:', spotifyApi);
    //     console.log(spotifyApi['_credentials'].accessToken);
    //
    //     spotifyApi
    //     .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    //     .then(
    //         function(data) {
    //             console.log('Artist albums', data.body);
    //         },
    //         function(err) {
    //             console.error('error:', err);
    //         });
    // }
};







    /* web-api practice
    */

    // connect_sp();
