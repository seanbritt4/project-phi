// var nn = require('./neural_network/nn_main');
var db = require('./database/queries');

// exports.main = function(){
exports.main = function(user_input){
    console.log('here, main')
    
    var input = user_input['user_values'];
    var num_songs = user_input['num_songs'];
    
    //create array of user input data, easier to access in nn this way
    var values = []
    values.push(input['tempo']);
    values.push(input['valence']);
    values.push(input['danceability']);
    values.push(input['loudness']);
    values.push(input['energy']);
    
    //debug:
    // values = user_input;
    console.log('module_manager, values:\t\t', values);
    
    //get global nn weights from DB
    // var db_weights = db.select("db_weights");
    var db_weights = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
    ];
    
    console.log('module_manager, db_weights:\t', db_weights);
    
    
    //send weights and user values to nn
    // nn.nnMain(values, db_weights);
    

    // user_values:
    // tempo, valence, danceability, loudness, energy
    // user_input.
    returninfo = {};
    returninfo.values = values;
    return returninfo;
    console.log('here, end')
}
