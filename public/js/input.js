// var weights = [0.0, 0.0, 0.0, 0.0, 0.0];
// window.onload = function(){
//     // console.log('hello from nn');
//     var sliders =  [document.getElementById("Loudness"),
//                     document.getElementById("Danceability"),
//                     document.getElementById("Hapiness"),
//                     document.getElementById("Tempo"),
//                     document.getElementById("Energy")]
//     // // var output = document.getElementById("demo");
//     // output.innerHTML = slider.value; // Display the default slider value
//
//     // Update the current slider value (each time you drag the slider handle)
//     sliders[0].oninput = function() {
//         // output.innerHTML = this.value;
//         // console.log(this.id,': ', this.value);
//         weights[0] = this.value;
//     }
//     sliders[1].oninput = function() {
//         // output.innerHTML = this.value;
//         // console.log(this.id,': ', this.value);
//         weights[1] = this.value;
//     }
//     sliders[2].oninput = function() {
//         // output.innerHTML = this.value;
//         // console.log(this.id,': ', this.value);
//         weights[2] = this.value;
//     }
//     sliders[3].oninput = function() {
//         // output.innerHTML = this.value;
//         // console.log(this.id,': ', this.value);
//         weights[3] = this.value;
//     }
//     sliders[4].oninput = function() {
//         // output.innerHTML = this.value;
//         // console.log(this.id,': ', this.value);
//         weights[4] = this.value;
//     }
//
//     // document.getElementById(submit).onclick(nnsubmit(weights));
// };

function nnsubmit(vals){
    //clear html div, remove input sliders
    document.getElementById('input').innerHTML = 'working...';

    // // convert from string to number
    // for(var i in arr){
    //     weights[i] = Number(weights[i]) / 100; // puts number between 0.0 and 1.0
    // }

    console.log(vals); //used for debugging
    nn_main(vals);
}
