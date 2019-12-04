var Spotify = require('spotify-web-api-node');  //spotify api
var Bottleneck = require('bottleneck/es5');     //limit api call rate
var fs = require('fs');                         //handle file I/O
var path = require('path');                     //sets path for I/O files
const readline = require('readline');           //used to read files line by line

//sets api call limit to ~3 req./second
const limiter = new Bottleneck({ minTime: 200 });

spotifyApi = new Spotify({
    clientId: '67c9bdb789854efc9b20b4c4c06ca0cb',
    clientSecret: '22132f38bf3e47b794903f9302b5be8e'
});

function one(){
    //grant access token and assign it to spotifyApi object
    spotifyApi.clientCredentialsGrant().then(function (data) {
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        //catch errors
    }, function (err) { console.log('Error retrieving access token', err.message); })
        .then(() => {
            const readArtists = readline.createInterface({
                input: fs.createReadStream('artists'),
                // input: fs.createReadStream('test_artists'),
                ouput: process.stdout,
                console: false
            });

            
            readArtists.on('line', function (line) {
                //read in artists name and get id
                // console.log(line)
                spotifyApi.searchArtists(line).then((data) => {
                    
                    /* artist_id, artist_name, artist_genre, artist_popularity */
                    // console.log('get artist');
                    var artist = 'artist('
                    artist += data.body.artists.items[0].id + ', ';
                    artist += data.body.artists.items[0].name + ', ';
                    artist += '[' + data.body.artists.items[0].genres + '], '; //lists a single genre
                    artist += data.body.artists.items[0].popularity + ')\n';
                    // global.artist += data.body.artists.items[0].genres[0]+', ';  //lists all generes

                    console.log(artist);
                    //append artist info to des file
                    fs.appendFile('artist_info', artist, 
                        (fileWriteErr) => { if (fileWriteErr) throw efileWriteErr; })
                        
                    global.id = data.body.artists.items[0].id;
                    // console.log(global.id);
                    spotifyApi.getArtistAlbums(id).then((data) => {
                        for (var i in data.body.items) {
                            // console.log(data.body.items[i])
                            var alb = 'album(' + data.body.items[i].id + ', ';
                            alb += global.id + ', ';
                            alb += data.body.items[i].name + ', ';
                            // alb += data.body.items[i].popularity + ", ";
                            alb += "null, ";
                            alb += data.body.items[i].release_date + ')\n';
                            // console.log(alb)
                            
                            fs.appendFile('album_info',  alb, (fileWriteErr) => { if (fileWriteErr) throw efileWriteErr; })
                        }
                            
                        }, function (err) { console.error('album error:', err); });
                        
                    }, (searchErr) => { console.log('Search Error: ', searchErr); })
                    //end searchArtists

                    spotifyApi.searchTracks('artist:' + line, { limit: 50 }).then((data) => {
                        console.log('search tracks')
                        // console.log('songs');
                        let t = data.body.tracks.items;
                        for (var i in t){
                            // console.log(i, t[i].name, '\t', t[i].id);
                            fs.appendFile('song_ids', t[i].id+'\n', (fileWriteErr) => { if (fileWriteErr) throw efileWriteErr; })
                        }
                    }, (err) => { console.log(err) })
                    
                    
                })
                
        })
}

function two(){
    //grant access token and assign it to spotifyApi object
    spotifyApi.clientCredentialsGrant().then(function (data) {
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        //catch errors
    }, function (err) { console.log('Error retrieving access token', err.message); })
        .then(() => {

            const readSongIds = readline.createInterface({
                // input: fs.createReadStream('artists'),
                input: fs.createReadStream('song_ids'),
                ouput: process.stdout,
                console: false
            });
            
        readSongIds.on('line', function(line){
            limiter.schedule(() => spotifyApi.getAudioFeaturesForTrack(line).then((data) => {
                console.log('audio features', line);
                // track = 'audio_features(' + line;
                var track = '';
                track += data.body.acousticness;
                track += ', ' + data.body.danceability;
                // track += ', ' + data.body.duration_ms;
                track += ', ' + data.body.energy;
                track += ', ' + data.body.instrumentalness;
                track += ', ' + data.body.key;
                track += ', ' + data.body.liveness;
                track += ', ' + data.body.loudness;
                track += ', ' + data.body.mode;
                track += ', ' + data.body.speechiness;
                track += ', ' + data.body.tempo;
                track += ', ' + data.body.time_signature;
                // track += ', ' + data.body.valence;
                track += ', ' + data.body.valence + '\n';
                console.log(track);
                
                fs.appendFile('audio_info', track,
                (fileWriteErr) => { if (fileWriteErr) throw efileWriteErr; })
                
                }, function (trackMetaErr) { console.log(trackMetaErr); }))
        })
    })
}
            /*
            */
           
        // })
        

/*
read artists from 'artists'
    search artists by name and build formatted strings "artist(...)"
    search albums by artist and build formatted strings "album(...)"
    search song by artist and build formatted strings "track(...)"      TODO!!!!!
        write song ids to 'song_ids'
        read song id from song_ids 
        search track audio features
        build formatted strings "audio_features(...)"
*/


//idk why but have to run one() then two() in seperate executions...
//      if i come back to this i will look into why but it works for
//      now so...

// one();
two();