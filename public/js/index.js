$(document).ready(()=>{
    $('#input').toggle()
    $('#output').toggle()
    $('#about-div').toggle()

    $('#start').on('click', ()=>{
        $('#start').toggle()
        $('#input').toggle()
        $('#welcome').toggle()
        $('#about').toggle()

        console.log('here, get input')
        // $.ajax({
        //     type: 'post',
        //     url: '/input'
        // })
    })

    $('#about').on('click', () => {
        $('#about-div').toggle()
        console.log('about')
    });

    $('#advanced-options').on('click', () => {
        // $('#about-div').show()
        console.log('advanced')
    });
    $('#export').on('click', () => {
        // $('#about-div').show()
        console.log('export')
    });
    $('#restart').on('click', () => {
        // $('#about-div').show()
        location.reload();
        console.log('restart')
    });

    $('#submit').on('click', ()=> {
        // console.log('in submit');
        //declares data variable, will be used to store data and pass it
        //along to the server
        var data = {};
        // data.user_values = vals;    //stores vals in data
        data.num_songs = 10;
        // $.ajax({
        //     type: 'POST',                   //type of ajax call
        //     data: JSON.stringify(data),     //prepares for flight
        //     contentType: 'application/json',  //unsure...
        //     url: '/',     //
        //     // url: JSON.stringify(process.env.PORT),     //destination, can use this more effectively
        //     // url: 'http://localhost:3000',     //destination, can use this more effectively
        //     success: function (data) {        //on success, recv's data from server
        //         console.log('success, send', JSON.stringify(data));
        //         console.log(data);
        //         // now we can do stuff with the data from the server
        //         $("#output").append('<b>Your playlist:</b><br><ul>');
        //         // for(var i in data.num_songs){
        //         for(var i=0; i<data.num_songs; i++){
        //             // $('#output').append('<br>', data.values[i]);
        //             // $('#output').append(i, '<br>');
        //             $('#output').append('<li>', i, '</li>');
        //         }
        //         $("#output").append('</ul>');
        //     }
        // });

        $('#input').hide();
        $('#output').show();
    })

})
