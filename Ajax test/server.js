var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

//data -- blank at start of server (maybe this should be changed to work as a
//	  queue?)
var values = [
	{
	}
];

var currentId = 0;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/values', function(req, res){
	var tempoR = req.body.tempo;
	var valenceR = req.body.valence;
	var danceabilityR = req.body.danceability;
	var loudnessR = req.body.loudness;
	var energyR = req.body.energy;

	currentId++;
	values.push({
		id: currentId,
		tempo: tempoR,
		valence: valenceR,
		danceability: danceabilityR,
		loudness: loudnessR,
		energy: energyR
	});
	console.log(tempoR + " " + valenceR + " " + danceabilityR + " " + loudnessR + " " + energyR);
	res.send('Created values!');
});


app.listen(PORT, function() {
	console.log("Server listening on " + PORT);
});
