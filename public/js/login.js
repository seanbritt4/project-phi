function user_login(){
    var name = prompt("Username:", "spotify username");
    if(name == null || name == ''){
        alert("Please try again!");
    }else{
        var greeting = "Welcome, ".concat(name, '!');
        document.getElementById("greet").innerHTML = greeting;
    }

    // var xhttp = new XMLHttpRequest();
    // // xhttp.open()
    // xhttp.open("SEND","/public/js/login", true);
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    // //         xhttp.send("SEND", 'hello from login.js', true);
    //         console.log('in');
    //     }else{
    //         console.log('out');
    //     }
    // };
    // xhttp.send();

}
