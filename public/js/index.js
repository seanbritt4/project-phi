$(document).ready(() => {
  $('#input').hide()
  $('#output').hide()
  $('#about-content').hide()
  $('#input-header').hide()
  $('#emoji-slider').hide()
  $('#advanced-input').hide()
  $('#num-songs').hide()

  $('#about-button').on('click', () => {
    $('#title').fadeToggle()
    $('#title2').fadeToggle()
    $('#about-info').fadeToggle()
    $('#start-button').fadeToggle()
  })

  // // When the user clicks on <span> (x), close the modal
  $('#close').on('click', () => {
    $('#title').fadeToggle()
    $('#title2').fadeToggle()
    $('#start-button').fadeToggle()
  })

  $('#start-button').on('click', () => {
    $('#title').hide()
    $('#title2').hide()
    $('#start-button').hide()
    $('#navbar').hide()
    $('#input').fadeToggle()
    $('#input-header').fadeToggle()
    $('#emoji-slider').fadeToggle()
    $('#num-songs').fadeToggle()
  })

  $('#submit-button').on('click', () => {
    $('#input').hide();
    $('#emoji-slider').hide();
    $('#num-songs').hide();
    $('#input-header').hide();
    
    var data = {}; //data to be sent to back end
    var e = document.getElementById("num-songs");
    data.num_songs = $("#num-songs :selected").val(); //get user selected numner of songs
    e = document.getElementById("genre-form");
    data.genre = $("#genre-form :selected").val(); //get user selected genre
    data.user_values = emojiSubmit() //stores vals in data
    
    $.ajax({
      type: 'POST', //type of ajax call
      data: JSON.stringify(data), //prepares for flight
      contentType: 'application/json', //unsure...
      url: '/', //url used to send/recv data
      
      success: function (data) { //on success, recv's data from server
        // now we can do stuff with the data from the server
        $("#playlist").append('<b>Your playlist:</b><br><ul>');
        // for(var i in data.num_songs){
          console.log('data:', data)
          for (var i = 0; i < data.num_songs; i++) {
            $('#playlist').append(i+1, ': ', data.track_names[i], ', by: ', data.artists_names[i], ' (', data.album_names[i], ')', '<br>');
          }
          $("#playlist").append('</ul>');
        }
      });

      $('#output').show();
      $('#playlist').show();

  })

  $('#restart').on('click', () => {
    window.location.reload()
  })
})