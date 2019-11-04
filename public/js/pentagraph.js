var radii, maxRadius;
$(function (){
    $('#input').hide();
    $('#login').hide();
    $('#output').hide();
    $("#start-button").on('click', function(){
        console.log('getting started');
        $('advanced-options').hide();
        $('.top').hide();
        $('.welcome-page').hide();
        $('#input').show();
        $('body').css("background-color: 'white'");
    });

    $('adv-button').on('click', function(){
        $('advanced-options').show();
    });

    /* May want to move, maybe to new file, maybe to .hbs?*/
    $('#submit').on('click', function(){
        $('#input').hide();
        $('#output').show();


    })

	function showCoordinates(event) {
		var tx = event.touches[0].clientX;
		var ty = event.touches[0].clientY;
		document.getElementById("demo").innerHTML = x + ", " + y;
	}
    // Determine if mouse is within a certain radius of another point
    function isInCircle(mx, my, px, py, radius){
        var dis = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));
        if(dis <= radius){
            return "true";
        } else {
            return "false";
        }
    }

    //returns the distance between two points
    function getDistance(mx, my, px, py){
        var dis = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));
        return dis;
    }

    myPanel = new jsgl.Panel(document.getElementById("panel"));
/*	<html>
	<body ontouchstart="showcoordinates(event)"
	ontouchmove="showCoordinates(event)">

	<p><span id="demo"></span></p>
	</html>
*/

    var polygon = myPanel.createPolygon();
    myPanel.addElement(polygon);

    polygon.getFill().setColor('#5F5');//#F80');
    var points = 5;

    var lines = [];
    var text = [];

    var twoPi = Math.PI * 2;
    var center = [215, 220];
    radii = [100, 100, 100, 100, 100];
    maxRadius = 200;
    var i;
    for(i = 0; i < points; i++){
        var x = Math.sin((twoPi)*(i/points))*radii[i] + center[0];
        var y = Math.cos((twoPi)*(i/points))*radii[i] + center[1];

        lines[i] = myPanel.createLine();
        lines[i].setStartPointXY(center[0], center[1]);
        lines[i].setEndPointXY(x, y);

        myPanel.addElement(lines[i]);
        polygon.addPointXY(x, y);

        x = Math.sin((twoPi)*(i/points))*maxRadius + center[0];
        y = Math.cos((twoPi)*(i/points))*maxRadius + center[1];
        text[i] = myPanel.createLabel();
        text[i].setLocationXY(x, y);
        text[i].setHorizontalAnchor(jsgl.HorizontalAnchor.CENTER);
        text[i].setVerticalAnchor(jsgl.VerticalAnchor.CENTER);
        text[i].setFontColor('#800');

        myPanel.addElement(text[i]);
    }


    text[0].setText("Tempo");
    text[1].setText("Happiness");
    text[2].setText("Danceability");
    text[3].setText("Loudness");
    text[4].setText("Energy");

    var clicked = "false";
    var selected = -1;
    function clickHandler(eventArgs){
        clicked = "true";
    }

    function releaseHandler(eventArgs){
        clicked = "false";
        selected = -1;
    }

    function mouseOutHandler(eventArgs){
        clicked = "false";
    }

    myPanel.addMouseDownListener(clickHandler);
    myPanel.addMouseUpListener(releaseHandler);
    myPanel.addMouseMoveListener(movePoint);
    //myPanel.addMouseOutListener(releaseHandler);
    function movePoint(eventArgs){

        if(clicked === "true"){
            for(var i = 0; i < polygon.getPointsCount(); i++){
                if(selected !== -1)
                i = selected;
                mouseXY = eventArgs.getLocation();
                pointXY = polygon.getPointAt(i);
                if(isInCircle(mouseXY.getX(), mouseXY.getY(), pointXY.getX(), pointXY.getY(), 15) == "true" || selected === i){
                    selected = i;
                    var dist = getDistance(mouseXY.getX(), mouseXY.getY(), center[0], center[1]);
                    if(dist <= maxRadius){
                        var x = Math.sin((twoPi)*(i/5))*dist + center[0];
                        var y = Math.cos((twoPi)*(i/5))*dist + center[1];
                        radii[i] = dist;
                        polygon.setPointXYAt(x, y, i);
                        lines[i].setEndPointXY(x, y);
                        var c = (Math.floor((radii[i]/maxRadius)*16)).toString(16);
                        if(c === 10)
                        c = 0xF;
                        c = 0xF - parseInt(c, 16);
                        c = c.toString(16);
                        text[i].setFontColor("#" + c + '' + 0 + '' + 0);
                    }
                    i = polygon.getPointsCount();
                }
            }
        }
    }

});
    // function sendAndRedirect(tempo, valence, danceability, loudness, energy){
        //console.log("redirecting...");
        //window.location.href = "./testSend.html";
        //document.getElementById("tempo").innerHTML = tempo;
    // }

function submit(){
    var vals = {
        tempo: radii[0]/maxRadius,
        valence: radii[1]/maxRadius,
        danceability: radii[2]/maxRadius,
        loudness: radii[3]/maxRadius,
        energy: radii[4]/maxRadius
    };

    send(vals);
    // nn_main(vals);

    // $(function () {
    //     var data = {};
    //     data.user_values = vals;
    //     // console.log('in jquery, user:', nn_output);
    //     // data.title = "title";
    //     // data.message = "message";
    //     $.ajax({
    //         type: 'POST',
    //         data: JSON.stringify(data),
    //         contentType: 'application/json',
    //         url: 'http://localhost:3000',
    //         success: function (data) {
    //             console.log('success');
    //             console.log(JSON.stringify(data));
    //         };
    //     });
    //
    //
    //
    //         // failure: console.log('failed to send data to app');
    //     $.ajax({
    //         type: 'GET',
    //         data
    //     })
    //
    //     // $.ajax({
    //     //     type: 'GET',
    //     //     data: JSON.stringify(data),
    //     //     contentType: 'application/json',
    //     //     url: 'http://localhost:3000',
    //     //     success: function (data) {
    //     //         console.log('success');
    //     //         console.log(JSON.stringify(data));
    //     //     }
    //     //     // failure: console.log('failed to send data to app');
    //     // });
    // });

}

function downvote(){
    console.log("User does not like the playlist.");
}

function upvote(){
    console.log("User does like the playlist.");
}
