var connection = require('./connect.js')
var statement;
var qoutput = [];

var variation = [.05,.1,.1,1,.1,3,.1,30,.1];
var minmax = [];
var vals = [.1,.5,.5,.5,.3,-5,.3,100,.4];

exports.select = function() {
  console.log(minmax);
  addVariation();
  console.log(minmax);
  connection.query(statement, function (err, result, fields) {
    if (err) {
    console.log(err);
    throw err;
    }
    else {
        console.log(result);
        qoutput = result;
      }
    });}

addVariation = function(){
  for(i=0;i<9;i++){
    minmax[i+i] = vals[i] - variation[i];
    minmax[i+i+1] = vals[i] + variation[i];
  }
  console.log(statement);
  statement = `SELECT artist.artist_name, album.album_name, track.track_name, audio_features.*
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
  AND (instrumentalness BETWEEN ${minmax[6]} AND ${minmax[7]})
  AND (liveness BETWEEN ${minmax[8]} AND ${minmax[9]})
  AND (loudness BETWEEN ${minmax[10]} AND ${minmax[11]})
  AND (speechiness BETWEEN ${minmax[12]} AND ${minmax[13]})
  AND (tempo BETWEEN ${minmax[14]} AND ${minmax[15]})
  AND (valence BETWEEN ${minmax[16]} AND ${minmax[17]})
  ORDER BY RAND()
  LIMIT 1000;`;
  console.log(statement);
}


exports.setVals = function(values){
  vals = values;
}

/*
exports.insert = function(query){
    console.log('EXAMPLE: in insert:', query);
}

exports.test = function(msg){
    console.log('queries:', msg);
    return 'hello from database/queries.js'.concat(msg);
}
*/
//butter
// exports.createQuery = function(query, content){
// }

/*
let statement = `SELECT artist.artist_name, album.album_name, track.track_name, audio_features.*
FROM artist
JOIN album
ON artist.artist_id=album.artist_id
JOIN track
ON album.album_id=track.album_id
JOIN audio_features
ON track.track_id=audio_features.track_id
WHERE (acousticness BETWEEN ${minAc} AND ${maxAc})
AND (danceability BETWEEN ${minD} AND ${maxD})
AND (energy BETWEEN ${minE} AND ${maxE})
AND (instrumentalness BETWEEN ${minIns} AND ${maxIns})
AND (liveness BETWEEN ${minLiv} AND ${maxLiv})
AND (loudness BETWEEN ${minLd} AND ${maxLd})
AND (speechiness BETWEEN ${minSp} AND ${maxSp})
AND (tempo BETWEEN ${mintmp} AND ${maxtmp})
AND (valence BETWEEN ${minval} AND ${maxval})
ORDER BY RAND()
LIMIT 1000;`;
*/
