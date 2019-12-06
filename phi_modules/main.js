var nn = require('./nn/nn_main');
var db = require('./database/queries');

exports.main = function(user_values){
    // var songs = db.select(user_values)
    console.log('1')
    
    songs = [
        [0.0139, 0.74, 0.835, 0, 10, 0.857, -3.425, 0, 0.0839, 123.024, 4, 0.535],
        [0.227, 0.468, 0.737, 0, 5, 0.104, -4.808, 0, 0.0964, 130.04, 4, 0.496],
        [0.0503, 0.607, 0.85, 0, 9, 0.0915, -4.725, 0, 0.0829, 154.961, 4, 0.783],
        [0.23, 0.493, 0.863, 0, 4, 0.252, -4.177, 0, 0.104, 82.463, 4, 0.703],
        [0.122, 0.673, 0.632, 0.000111, 2, 0.278, -5.803, 0, 0.0567, 140.005, 4, 0.377],
        [0.000283, 0.797, 0.604, 0.681, 10, 0.409, -5.465, 0, 0.048, 122.99, 4, 0.415],
        [0.0361, 0.648, 0.762, 0.23, 7, 0.0634, -5.83, 1, 0.0889, 82.495, 4, 0.33],
        [0.342, 0.703, 0.594, 0, 5, 0.123, -6.146, 0, 0.0752, 153.848, 4, 0.475],
        [0.0533, 0.878, 0.619, 0, 6, 0.113, -5.56, 1, 0.102, 136.041, 4, 0.639],
        [0.139, 0.706, 0.679, 0.0000698, 9, 0.465, -5.614, 1, 0.0324, 140.081, 4, 0.657]
    ]

    console.log('sending to nn')
    var playlist = nn.main(songs)
    var return_info = {}
    return_info.num_songs = num_songs
    return_info.playlist = []
    
    /* pick top num_songs from playlist, add to return_info.playlist */
    var num_songs = 0;
    for(var song in playlist){
        if (playlist[song] >= 0.7){
            return_info.playlist.push(songs[song])
            num_songs += 1;
        }
    }

    console.log('playlist:',    playlist)
    console.log('playlist:',    playlist.length)
    console.log('songs:',       songs.length)
    console.log('return_info:', return_info.playlist)

    console.log('playlist generated, sending to front end')
    
    return return_info;
}
