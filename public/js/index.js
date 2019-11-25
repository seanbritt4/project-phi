$(document).ready(()=>{
    $('#input').hide()
    $('#output').hide()
    $('#about-info').hide()

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
    })
    
    // $('tempo').on('change', () => {
    $('#tempo[type=range]').on('change', () => {
        console.log('tempo moved', this.value);
        // $(this).trigger('change');
    })

    $('#advanced-button').on('click', () => {
        $('#advanced-input').toggle()
        $('tempo').value = 0;
        console.log('advanced')
    });
    $('#export-button').on('click', () => {
        console.log('export')
    });
    $('#restart').on('click', () => {
        location.reload();
    });

    // $('#tempo').on('change', () => {
    //     console.log('tempo')
        
    //     console.log(this.value)

    // })


    $('#submit-button').on('click', ()=> {
        //declares data variable, will be used to store data and pass it
        //along to the server



        var data = {};
        data.user_values = 23;    //stores vals in data
        data.num_songs = 10;
        $.ajax({
            type: 'POST',                     //type of ajax call
            data: JSON.stringify(data),       //prepares for flight
            contentType: 'application/json',  //unsure...
            url: '/',                         //destination url
            success: function (data) {        //on success, recv's data from server
                console.log('success, send', JSON.stringify(data));
                console.log(data);
                // now we can do stuff with the data from the server
                $("#playlist").append('<b>Your playlist:</b><br><ul>');
                // for(var i in data.num_songs){
                for(var i=0; i<data.num_songs; i++){
                    //writes output playlist to web page
                    $('#playlist').append('<li>', i, '</li>');
                }
                //writes html code to complete and end the list element
                $("#playlist").append('</ul>');
            }
        });

        $('#input').hide();
        $('#output').show();
    })

})
