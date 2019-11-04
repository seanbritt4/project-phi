var Spotify = require('spotify-web-api-node');

// exports.connect = function(call){
exports.connectPhi = function(){
    console.log('in connect sp');
    //project phi info
    var spotifyApi = new Spotify({
        clientId: process.env.PHI_SP_ID,
        clientSecret: process.env.PHI_SP_SECRET
    });

    //grant access token and assign it to spotifyApi object
    spotifyApi.clientCredentialsGrant().then(function(data) {
        // console.log('The access token expires in ' + data.body['expires_in']);
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        // console.log('sAPI:', spotifyApi);
    }, function(err) {
        //catch errors
        console.log('Something went wrong when retrieving an access token', err.message);
    })
    //here we want to make calls for popular ar
    .then(function(){
        // console.log('token:', sotifyApi.getAccessToken());

        // var artists = ['Drake', 'Ariana Grande','Billie Eilish', "Maroon "]
        spotifyApi.searchArtists("Billie Eilish")
        .then(function(data) {
            // console.log('Search artists by Drake:', data.body);
            // console.log('data.body', data.body);
            // console.log('data.body.artists', data.body.artists);

            var artistId = data.body.artists.items[0].id;
            var artistName = data.body.artists.items[0].name;

            console.log('data.body.artists.items[0].id', artistId);
            console.log('data.body.artists.items[0].name', artistName);

        }, function(err) {
        //     // console.log('here');
            console.error('err:', err);
        });
    })
};
