
var weights = [0.0, 0.0, 0.0, 0.0, 0.0];
var genre, genreElement;
var num_songs, num_songsElement;
window.onload = function(){
    var sliders =  [document.getElementById("Loudness"),
                    document.getElementById("Danceability"),
                    document.getElementById("Hapiness"),
                    document.getElementById("Tempo"),
                    document.getElementById("Energy")]

    genreElement = document.getElementById("genre-form");
    num_songsElement = document.getElementById("num-songs");
    //e.options[e.selectedIndex].value;

    // Update the current slider value (each time you drag the slider handle)
    /*
    sliders[0].oninput = function() { weights[0] = this.value; }
    sliders[1].oninput = function() { weights[1] = this.value; }
    sliders[2].oninput = function() { weights[2] = this.value; }
    sliders[3].oninput = function() { weights[3] = this.value; }
    sliders[4].oninput = function() { weights[4] = this.value; console.log(this.value);}
    */
};

function nnsubmit(){
    // let a
    console.log('nnsub, w:', weights);
    $(function () {
        console.log('submited');

        var data = {};
        data.genre = genreElement.option[genreElement.selectedIndex].value;
        data.num_songs = num_songsElement.option[num_songsElement.selectedIndex].value;
        for(var i = 0; i < 5; i++){
          weights[i] = sliders[i].value;
          console.log(weights[i] + "\t" + sliders[i].value);
        }
        data.w = weights;
        console.log('in jquery, w:', weights);
        data.title = "title";
        data.message = "message";
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:3000',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });


    // function nnsubmit(vals){
  //clear html div, remove input sliders
 // document.getElementById('input').innerHTML = 'working...';

 // console.log(vals); //used for debugging
    // nn_main(vals);
}
