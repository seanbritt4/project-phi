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



var polygon = myPanel.createPolygon();
myPanel.addElement(polygon);

polygon.getFill().setColor('#5F5');//#F80');
var points = 5;

var lines = [];
var text = [];

var twoPi = Math.PI * 2;
var center = [215, 220];
var radii = [100, 100, 100, 100, 100];
var maxRadius = 200;
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

function submit(){
  var vals = {
      tempo: radii[0]/maxRadius,
      valence: radii[1]/maxRadius,
      danceability: radii[2]/maxRadius,
      loudness: radii[3]/maxRadius,
      energy: radii[4]/maxRadius,
      genre: document.getElementById("genre").value,
      popularity: "NULL",
      liveness: "NULL",
      key: "NULL",
      modality: "NULL"
    };

    if(document.getElementById("advanced").style.display === "block"){
	vals.popularity = document.getElementById("advanced").getElementsByClassName("popularity").value;
	vals.liveness = document.getElementById("advanced").getElementsByClassName("liveness").value;
	vals.key = document.getElementById("advanced").getElementsByClassName("key").value;
	vals.modality = document.getElementById("advanced").getElementsByClassName("mode").value;
    }

    console.log('pent::sub, v:', vals);
    $(function () {
        console.log('submited');

        var data = {};
        data.w = vals;
        console.log('in jquery, w:', vals);
        data.title = "title";
        data.message = "message";
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'https://project-phi.herokuapp.com',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });

  // nnsubmit(vals);
}

function downvote(){
  console.log("User does not like the playlist.");
}

function upvote(){
  console.log("User does like the playlist.");
}