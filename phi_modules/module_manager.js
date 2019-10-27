var nn = require('./neural_network/nn_main.js');
var spfy = require('./spotify_api/spotify_main.js');
var db = require('./database/connect.js');

function round(n, decimals){
    return Number(Math.round(n+'e'+decimals)+'e-'+decimals);
}

exports.main = function(user_input){
    var values = user_input['user_values'];
    values['tempo'] = round(values['tempo'], 5);
    values['valence'] = round(values['valence'], 5);
    values['danceability'] = round(values['danceability'], 5);
    values['loudness'] = round(values['loudness'], 5);
    values['energy'] = round(values['energy'], 5);

    console.log('module_manager:', values);

    //get global nn weights from DB
    // var db_weights = db.select("db_weights");
    var db_weights = [round(Math.random(), 5),
                      round(Math.random(), 5),
                      round(Math.random(), 5),
                      round(Math.random(), 5),
                      round(Math.random(), 5)];

    //send weights and user values to nn
    nn.nnMain(values, db_weights);



    /*
        user_values:
            tempo, valence, danceability, loudness, energy
    */
    // user_input.

}
