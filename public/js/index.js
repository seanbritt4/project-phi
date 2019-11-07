// jQuery.fn.center = function () {
//     this.css("position", "absolute");
//     this.css("top", Math.max(0, ( 3 * ($(window).height() - $(this).outerHeight()) / 4) +
//         $(window).scrollTop()) + "px");
//     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
//         $(window).scrollLeft()) + "px");
//     return this;
// }

$(document).ready(()=>{
    $('#input').hide()
    $('#output').hide()
    $('#about-info').hide()
	$('#emoji-slider').hide()

    // $('.center').center()

    $('#about-button').on('click', () => {
        $('#about-info').fadeToggle()
        $('#restart').fadeToggle()
        $('#start-button').fadeToggle()
    })

    $('#start-button').on('click', ()=>{
        $('#start-button').hide()
        $('#about-button').hide()
        $('#about-info').hide()
        $('#advanced-input').hide()
        $('#title').fadeOut()
        $('#input').show()
        $('submit-button').show()
        $('#advanced').show()
		$('#emoji-slider').show()
    })


    
    $('tempo[type=range').on('input', () => {
        console.Console.log('slider moved', this.value);
        $(this).trigger('change');
    })

    $('#advanced-button').on('click', () => {
        $('#advanced-input').toggle()

        console.log('advanced')
    });
    $('#export-button').on('click', () => {
        console.log('export')
    });
    $('#restart').on('click', () => {
        location.reload();
    });

    $('#submit-button').on('click', ()=> {
        // console.log('in submit');
        //declares data variable, will be used to store data and pass it
        //along to the server
        var data = {};
        data.user_values = 23;    //stores vals in data
        data.num_songs = 10;
        $.ajax({
            type: 'POST',                   //type of ajax call
            data: JSON.stringify(data),     //prepares for flight
            contentType: 'application/json',  //unsure...
            url: '/',     //
            // url: JSON.stringify(process.env.PORT),     //destination, can use this more effectively
            // url: 'http://localhost:3000',     //destination, can use this more effectively
            success: function (data) {        //on success, recv's data from server
                console.log('success, send', JSON.stringify(data));
                console.log(data);
                // now we can do stuff with the data from the server
                $("#playlist").append('<b>Your playlist:</b><br><ul>');
                // for(var i in data.num_songs){
                for(var i=0; i<data.num_songs; i++){
                    // $('#output').append('<br>', data.values[i]);
                    // $('#output').append(i, '<br>');
                    $('#playlist').append('<li>', i, '</li>');
                }
                $("#playlist").append('</ul>');
            }
        });

        $('#input').hide();
        $('#output').show();
        $('#emoji-slider').hide();
    })

})
