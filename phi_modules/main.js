var nn = require('./nn/nn_main');
var db = require('./database/queries');

function asyncMain(data){
    return new Promise((res, rej) => {
        setTimeout( () => res(() => {
            var user_values = data.user_values;
            var num_songs = data.num_songs;
            var genre = data.genre;
            
            // console.log(user_values, num_songs)
            db.sendQuery(user_values, genre)

            //format for nn
            var num_tracks = 0;
            var nn_data = {
                song_ids: [],
                audio_features: [],
                num_songs: num_songs,
                output: []
            }
        
            for (var i in query){
                    num_tracks++;
                    nn_data.song_ids.push(query[i].track_id)
                    var audio_features = [query[i].acousticness, query[i].danceability, query[i].energy,
                    query[i].loudness, query[i].tempo, query[i].valence]   
                    nn_data.audio_features.push(audio_features)
            }
                
            console.log('sending to nn')
            var playlist = nn.main(nn_data)
            console.log('back from nn')
            
            var count = 0;
            var i = 0;
            var return_info = {
                genre: genre,
                num_songs,
                artists_names: [],
                album_names: [],
                track_names: [],
                track_ids: [],
                message_status: false,
                message: ''
            }
            
            console.log('query length', query.length)
            if(query.length < 20){
                for(var i in return_info){
                    return_info.artists_names.push(query[i].artist_name)
                    return_info.album_names.push(query[i].album_name)
                    return_info.track_names.push(query[i].track_name)
                    return_info.message_status = true
                    return_info.message = 'Too few tracks...'
                }
            }else{
                playlist.sort().reverse()

                while(count < num_songs && i < 5000){
                    if(playlist == undefined) {
                        console.log('no songs returned')
                        return
                    }else{
                        if(playlist[i] >= 0.75){
                            console.log(playlist[i])
                            console.log(query[i])
                            return_info.artists_names.push(query[i].artist_name)
                            return_info.album_names.push(query[i].album_name)
                            return_info.track_names.push(query[i].track_name)
                            return_info.track_ids.push(query[i].track_id)
                            count++;
                        }
                    }
                    i++;
                }
            }

            return_info.num_songs = count;
            // console.log('main:', return_info)
            // console.log(return_info.num_songs)
            console.log('end of be main')
            return return_info
        }, 3000));
    })
};

exports.main = async (data) => {
    // const a = await asyncMain(data);
    return await asyncMain(data)
}