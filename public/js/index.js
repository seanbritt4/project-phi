$(document).ready(() => {
  $('#input').hide()
  $('#output').hide()
  $('#about-content').hide()

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
})
