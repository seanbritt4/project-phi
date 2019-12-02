var connection = require('./connect.js')

exports.select = function(query) {
    console.log('EXAMPLE: in select', query);
}

exports.insert = function(query){
    console.log('EXAMPLE: in insert:', query);
}

exports.test = function(msg){
    console.log('queries:', msg);
    return 'hello from database/queries.js'.concat(msg);
}
// exports.createQuery = function(query, content){
// }
let statement = `SELECT artist.artist_name, album.album_name, track.track_name, audio_features.*
FROM artist
JOIN album
ON artist.artist_id=album.artist_id
JOIN track
ON album.album_id=track.album_id
JOIN audio_features
ON track.track_id=audio_features.track_id
WHERE (acousticness BETWEEN ${min} AND ${max})
AND (danceability BETWEEN ${min} AND ${max})
AND (energy BETWEEN ${min} AND ${max})
AND (instrumentalness BETWEEN ${minIns} AND ${maxIns})
AND (liveness BETWEEN ${min} AND ${max})
AND (loudness BETWEEN ${minLd} AND ${maxLd})
AND (speechiness BETWEEN ${min} AND ${max})
AND (tempo BETWEEN ${mintmp} AND ${maxtmp})
AND (valence BETWEEN ${minval} AND ${maxval})
ORDER BY RAND()
LIMIT 1000;`;
