function sendToDB(nn_output){
    console.log('pent::sub, nn_output:', nn_output);
    $(function () {
        var data = {};
        data.nn_output = nn_output;
        console.log('in jquery, nn_output:', nn_output);
        data.title = "title";
        data.message = "message";
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:3000',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
            // failure: console.log('failed to send data to app');
        });
        console.log('submited');
    });
}

function nn_main(user_web_input){
    //debugging...
    console.log('hello from nn main()');

    /*
    do nn stuff and calls

    */

    sendToDB(user_web_input);

    // $(document).ajaxSend(()=>{
    //     $('.log').text("hello from nn main(), ajax");
    //     // console.log('in nn jquery');
    // });

    //begin tf stuff here
    // const m = tf.tensor2d(w, [2,2,2,2,2]);
    // const m = tf.tensor2d(w, [2,2]);    //issue here...
}
