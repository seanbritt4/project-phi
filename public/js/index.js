$(document).ready(() => {
  // $('#input').hide()
  // $('#output').hide()
  $('#about-info').hide()
  // $('#emoji-slider').hide()
  // $('#input-header').hide()

  // $('.center').center()

  $('#about-button').on('click', () => {
    $('#title').hide()
    $('#about-button').hide()
    $('#about-info').fadeToggle()
    $('#start-button').fadeToggle()
    document.getElementById('about-content').style.display = 'block'
  })

  // $('#about-button').on('click', () => {
  //   //console.log('clicked about')
  //   $('#about-modal').show();
  // }
  //
  // // When the user clicks on <span> (x), close the modal
  $('#close').on('click', () => {
    $('#title').fadeToggle()
    $('#about-button').fadeToggle()
    $('#about-info').fadeToggle()
    $('#start-button').fadeToggle()
    $('#about-modal').hide();
  })
  //
  // // //When the user clicks anywhere outside of the modal, close it
  // $(window).on('click', () => function(event) {
  //     if (event.target == modal) {
  //       $('#about-modal').hide();
  //     }
})
