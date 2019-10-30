var nn = require('./neural_network/nn_main');
// var sp = require('./spotify_api/spotify_main');
var db = require('./database/connect');

console.log('stupid here test');

function round(n){
    //js doesnt like to round decimals...
    return Number(Math.round(n*10000)/10000);
}

exports.main = function(user_input){
    var input = user_input['user_values'];
    var num_songs = user_input['num_songs'];

    //create array of user input data, easier to access in nn this way
    var values = []
    values.push(round(input['tempo']));
    values.push(round(input['valence']));
    values.push(round(input['danceability']));
    values.push(round(input['loudness']));
    values.push(round(input['energy']));

    //debug:
    // values = user_input;
    console.log('module_manager, values:\t\t', values);

    //get global nn weights from DB
    // var db_weights = db.select("db_weights");
    var db_weights = [
        round(Math.random()),
        round(Math.random()),
        round(Math.random()),
        round(Math.random()),
        round(Math.random())
    ];

    console.log('module_manager, db_weights:\t', db_weights);


    //send weights and user values to nn
    // nn.nnMain(values, db_weights);

    /*
        user_values:
            tempo, valence, danceability, loudness, energy
    */
    // user_input.
    returninfo = {};
    returninfo.values = values;
    return returninfo;
}
