var Spotify = require('spotify-web-api-node');


exports.connect = function(call){
    console.log('in connect sp');
    //project phi info
    var spotifyApi = new Spotify({
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
    });

    spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        // console.log('sAPI:', spotifyApi);
        // console.log('access token:', spotifyApi['_credentials'].accessToken);
    }
    , function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    }
    , function(){
        // console.log('sAPI:', spotifyApi);
        console.log(spotifyApi['_credentials'].accessToken);

        spotifyApi
            .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE');
            .then(
                function(data) {
                    console.log('Artist albums', data.body);
                },
                function(err) {
                    console.error('error:', err);
                })};

};







    /* web-api practice
    */

    // connect_sp();
