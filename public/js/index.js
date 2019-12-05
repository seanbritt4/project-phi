$(document).ready(() => {
<<<<<<< HEAD
  $('#input').hide()
  $('#output').hide()
  $('#about-content').hide()
  $('#num-songs').hide()
  $('#genre-form').hide()


  $('#about-button').on('click', () => {
    $('#title').fadeToggle()
    $('#title2').fadeToggle()
    $('#about-info').fadeToggle()
    $('#start-button').fadeToggle()
  })

  //
  // // When the user clicks on <span> (x), close the modal
  $('#close').on('click', () => {
    $('#title').show()
    $('#title2').show()
    $('#start-button').show()
  })
})

$('#start-button').on('click', () => {
  window.open('views/submit.hbs', "_self")
// const slider = require('./emojiSlider.js')

$(document).ready(() => {
    $('#input').hide()
    $('#output').hide()
    $('#about-info').hide()
    $('#emoji-slider').hide()
    $('#input-header').hide()
    $('#genre-form').hide()
    $('#num-songs').hide()



    $('#about-button').on('click', () => {
      $('#title').hide()
      $('#about-button').hide()
      $('#about-info').fadeToggle()
      $('#restart').fadeToggle()
      $('#start-button').fadeToggle()
    })

    // When the user clicks on <span> (x), close the modal
    $('#close').on('click', () => {
      $('#title').fadeToggle()
      $('#about-button').fadeToggle()
      $('#about-info').fadeToggle()
      $('#start-button').fadeToggle()
      $('#about-modal').hide();
    })

      //When the user clicks anywhere outside of the modal, close it
      // $(window).on('click', () => function(event) {
      //     if (event.target == modal) {
      //       $('#about-modal').hide();
      //     }


    $('#start-button').on('click', () => {
      $('#start-button').hide()
      $('#about-button').hide()
=======
      $('#input').hide()
      // $('#output').hide()
>>>>>>> bb0996c2aa85fb245c8c2d1a655401ca2cc2f6ad
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
      console.log("Hello")
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
      var data = {};  //data to be sent to back end
      var e = document.getElementById("num-songs");
      data.num_songs = $("#num-songs :selected").val(); //get user selected numner of songs
      e = document.getElementById("genre-form");
      data.genre = $("#genre-form :selected").val();  //get user selected genre
      data.user_values = emojiSubmit() //stores vals in data
      //  console.log("Test: ", data.num_songs, " ", data.genre);
      console.log(data)
      
      $.ajax({
        type: 'POST', //type of ajax call
        data: JSON.stringify(data), //prepares for flight
        contentType: 'application/json', //unsure...
        url: '/', //

        success: function(data) { //on success, recv's data from server
        // now we can do stuff with the data from the server
        $("#playlist").append('<b>Your playlist:</b><br><ul>');
        // for(var i in data.num_songs){
          for (var i = 0; i < data.num_songs; i++) {
            // $('#output').append('<br>', data.values[i]);
            // $('#output').append(i, '<br>');
            $('#playlist').append('<li>', /* i,*/'</li>');
          }
          $("#playlist").append('</ul>');
        }
      });
      
      $('#input').hide();
      $('#emoji-slider').hide();
      $('#num-songs').hide();
      $('#input-header').hide();
      // $('#output').show();
    })

    $('#restart').on('click', () => {
        window.location.reload()
    })
  })