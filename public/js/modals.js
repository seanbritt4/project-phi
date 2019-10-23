/*about modal*/

var modal, aboutBtn, aboutSpan;

window.onload = function() {
    modal = document.getElementById('aboutModal');
    aboutBtn = document.getElementById('about');
    aboutSpan = document.getElementsByClassName("close")[0];
    aboutBtn.onclick = function(){
        console.log('clicked about')
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    aboutSpan.onclick = function() {
      modal.style.display = "none";
    }
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*other modals*/
