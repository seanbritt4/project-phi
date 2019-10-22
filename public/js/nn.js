

function nn_main(w){
    //debugging...
    console.log('hello from nn main()');
    console.log(w);


    $(document).ajaxSend(()=>{
        $('.log').text("hello from nn main(), ajax");
        // console.log('in nn jquery');
    });

    //begin tf stuff here
    // const m = tf.tensor2d(w, [2,2,2,2,2]);
    // const m = tf.tensor2d(w, [2,2]);    //issue here...
}
