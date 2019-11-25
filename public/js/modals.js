/*about modal*/

var modal, aboutBtn, aboutSpan;

window.onload = function() {
    aboutBtn = document.getElementById('about-button');
    modal = document.getElementById('about-modal');
    aboutSpan = document.getElementsByClassName("close")[0];

    aboutBtn.onclick = function() {
      modal.style.display = "block";
    }

    // // When the user clicks on <span> (x), close the modal
    aboutSpan.onclick = function() {
      modal.style.display = "none";
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }

      /*other modals ???*/
    }
  }
