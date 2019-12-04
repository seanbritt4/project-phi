var connection = require('./connect.js')
var qoutput = [];

var min,    max,
    minIns, maxIns,
    minLd,  maxLd,
    mintmp, maxtmp,
    minval, maxval;

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

/*let statement = `SELECT artist.artist_name, album.album_name, track.track_name, audio_features.*
FROM artist
JOIN album
ON artist.artist_id=album.artist_id
JOIN track
ON album.album_id=track.album_id
JOIN audio_features
ON track.track_id=audio_features.track_id
WHERE 1=1
ORDER BY RAND()
LIMIT 1000;`;*/

exports.select = function(query) {
  connection.query(statement, function (err, result, fields) {
    if (err) {
    console.log(err);
    throw err;
    }
    else {
        console.log(result);
        qoutput = result;
      }
    });
}
