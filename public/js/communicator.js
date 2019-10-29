/*
    possibly a temporary file, will want to change name at the very least,
    also likely will want to restructure files and data flow... this does not
    seem optimal...
*/

//send user input information to the server using ajax and jQuery
//vals: user input from pentagraph.js
function send(vals){
    //jQuery, waits until after page has loaded and is ready
    $(document).ready(() =>
        //then uses this anonymous func to communitcate with the server
        $(function () {
            //declares data variable, will be used to store data and pass it
            //along to the server
            var data = {};
            data.user_values = vals;    //stores vals in data
            $.ajax({
                type: 'POST',                   //type of ajax call
                data: JSON.stringify(data),     //prepares for flight
                contentType: 'application/json',  //unsure...
                url: '/',     //
                // url: JSON.stringify(process.env.PORT),     //destination, can use this more effectively
                // url: 'http://localhost:3000',     //destination, can use this more effectively
                success: function (data) {        //on success, recv's data from server
                    console.log('success, send', JSON.stringify(data));
                    console.log(data.values);
                    // now we can do stuff with the data from the server
                    $("#output").append('Your playlist:');
                    for(var i in data.values){
                        $('#output').append('<br>', i);
                    }
                }
            });
        })
    )
}
