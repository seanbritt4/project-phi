function user_login(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xhttp.send("SEND", 'hello from login.js', true);
        }
    };
    xhttp.open("GET", "todo.txt", true);
    xhttp.send();
//     var name = prompt("Username:", "spotify username");
//     if(name == null || name == ''){
//         alert("Please try again!");
//     }else{
//         var greeting = "Welcome, ".concat(name, '!');
//         document.getElementById("greet").innerHTML = greeting;
//     }

}
