$(document).ready(() => {
      $('#input').hide()
      $('#output').hide()
      $('#about-content').hide()
      $('#input-header').hide()
      $('#emoji-slider').hide()
      $('#advanced-input').hide()


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
        $('#input').show()

      $('#advanced-button').on('click', () => {
        $('#advanced-options').show()
      })

      $('#restart').on('click', () => {
        window.location.reload()
      })
    })
