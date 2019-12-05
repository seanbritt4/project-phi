var connection = require('./connect.js')
//Holds Query
var statement;
//Variation applied to vals, needs refining
var variation = [.05,.1,.1,1,.1,3,.1,30,.1];
//Holds min and max of vals
var minmax = [];
//default test vals
var vals = [.1,.5,.5,.5,.3,-5,.3,100,.4];

//Sends and retrieves statement
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
        //setTimeout(function () {
        console.log("returning result " + result);
        console.log(result);
        return result;
      //}, 5000);
      }
    });}

//Adds the variation to the input params and applies them to statement.
addVariation = function(){
  for(i=0;i<9;i++){
    minmax[i+i] = vals[i] - variation[i];
    minmax[i+i+1] = vals[i] + variation[i];
  }
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
  console.log("printing statement " + statement);
}

//Function called outside this module
exports.sendQuery = function(values){

  if(values){
    console.log("pushed values ");
  vals = values;
}
else {
  console.log("no vals input");
}
 console.log("printing vals " + vals);
  let qoutput = select();
  connection.end();
  console.log("returning output" + qoutput);
  return qoutput;
}
