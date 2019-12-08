//Establish connection with Database
var connection  = require('./connect.js');
//Holds Query
var statement;
//Holds min and max of vals
var minmax = [];
//default test vals
var vals = [.1,.5,.5,-5,100,.4];
//Variation applied to vals, needs refining
var variation = [1,1,1,20,90,1];
//Holds min and max of vals
var minmax = [];
// result of query stored here and returned
var qoutput;

var genre;

//Gets values and send to select
exports.sendQuery = function(values, g){
  setTimeout(function(){
  if(values){
    console.log("pushed values ");
    vals = values;
  }
  else {
    console.log("no vals input");
  }
  if(g){
    console.log("pushed genre");
    genre = g;
  }
  else {
    console.log("no genre");
  }
  console.log("printing vals " + vals);
  console.log("gerne");
  console.log(genre);
    select();
    setTimeout(function(){ // Needs to wait because its async
      connection.end();
      console.log("returning output ");
      console.log(qoutput);
      global.query=qoutput;
      //export.qoutput = qoutput;
      //return qoutput;
    }, 5000);
  }, 3000);
}

// Sets min and maxs and sends the query and returns
select = function() {
  console.log("printing variation " + variation);
  addVariation();
  console.log("printing altered values " + minmax);

      connection.query(statement, function (err, result, fields) {
        if (err) {
          console.log(err);
          throw err;
        }
        else {
          console.log("returning result");
          //console.log(result);
          qoutput = result;
        }
      });
}

//Adds variation to the values given
addVariation = function(){
  for(i=0;i<6;i++){
    minmax[i+i] = vals[i] - variation[i];
    minmax[i+i+1] = vals[i] + variation[i];
  }
  /*statement = `SELECT artist.artist_name, album.album_name, track.track_name, audio_features.*
  FROM artist
  JOIN album
  ON artist.artist_id=album.artist_id
  JOIN track
  ON album.album_id=track.album_id
  JOIN audio_features
  ON track.track_id=audio_features.track_id
  WHERE (acousticness BETWEEN ${minmax[0]} AND ${minmax[1]})
  AND (danceability BETWEEN ${minmax[2]} AND ${minmax[3]})
  AND (energy BETWEEN ${minmax[4]} AND ${minmax[5]})
  AND (liveness BETWEEN ${minmax[6]} AND ${minmax[7]})
  AND (loudness BETWEEN ${minmax[8]} AND ${minmax[9]})
  AND (speechiness BETWEEN ${minmax[10]} AND ${minmax[11]})
  AND (tempo BETWEEN ${minmax[12]} AND ${minmax[13]})
  AND (valence BETWEEN ${minmax[14]} AND ${minmax[15]})
  AND (artist.artist_genre LIKE '${genre}')
  ORDER BY RAND()
  LIMIT 1000;`;*/

/*  statement = `SELECT artist.artist_name, album.album_name, track.track_name, artist.artist_genre, audio_features.*
  FROM artist, album, track, audio_features
  WHERE (artist_genre LIKE '%rock%')
  AND (artist.artist_id = album.artist_id)
  AND (album.artist_id = track.artist_id)
  AND (track.artist_id = audio_features.artist_id)
  ORDER BY RAND()
  LIMIT 1000;`;
*/

/*
  statement = `SELECT artist.artist_id, audio_features.* FROM artist, audio_features
WHERE (artist_genre LIKE '%${genre}%') AND artist.artist_id = audio_features.artist_id;`
*/

/*statement = `SELECT
artist.artist_name,
album.album_name,
track.track_name,
audio_features.acousticness as acousticness,
audio_features.danceability as danceability,
audio_features.energy as energy,
audio_features.loudness as loudness,
audio_features.tempo as tempo,
audio_features.valence as valence
FROM artist
INNER JOIN album
ON artist.artist_id=album.artist_id
INNER JOIN track
ON album.album_id=track.album_id
INNER JOIN audio_features
ON track.track_id=audio_features.track_id
WHERE (acousticness BETWEEN ${minmax[0]} AND ${minmax[1]})
AND (danceability BETWEEN ${minmax[2]} AND ${minmax[3]})
AND (energy BETWEEN ${minmax[4]} AND ${minmax[5]})
AND (loudness BETWEEN ${minmax[6]} AND ${minmax[7]})
AND (tempo BETWEEN ${minmax[8]} AND ${minmax[9]})
AND (valence BETWEEN ${minmax[10]} AND ${minmax[11]})
AND (artist.artist_genre LIKE '${genre}')
ORDER BY rand()
LIMIT 500;`*/

statement = `SELECT
artist.artist_name,
album.album_name,
track.track_name,
audio_features.acousticness as acousticness,
audio_features.danceability as danceability,
audio_features.energy as energy,
audio_features.loudness as loudness,
audio_features.tempo as tempo,
audio_features.valence as valence
FROM artist
INNER JOIN album
ON (artist.artist_id = album.artist_id)
INNER JOIN track
ON (album.album_id = track.album_id)
INNER JOIN audio_features
ON (track.track_id = audio_features.track_id)
WHERE (acousticness BETWEEN ${minmax[0]} AND ${minmax[1]})
AND (danceability BETWEEN ${minmax[2]} AND ${minmax[3]})
AND (energy BETWEEN ${minmax[4]} AND ${minmax[5]})
AND (loudness BETWEEN ${minmax[6]} AND ${minmax[7]})
AND (tempo BETWEEN ${minmax[8]} AND ${minmax[9]})
AND (valence BETWEEN ${minmax[10]} AND ${minmax[11]})
AND (artist.artist_genre LIKE '%${genre}%')
ORDER BY rand()
LIMIT 500;`



  console.log("printing statement " + statement);
}
