var bigSmile, forcedSmile, normalSmile, bored, disgruntled, malcontent, frustrated, singleTear, prettySad, sadBoi, tired, asleep, angry, mad, devilish, poop;
bigSmile 	= document.createElement("IMG");
forcedSmile = document.createElement("IMG");
normalSmile = document.createElement("IMG");
bored 		= document.createElement("IMG");
disgruntled = document.createElement("IMG");
malcontent 	= document.createElement("IMG");
frustrated 	= document.createElement("IMG");
singleTear 	= document.createElement("IMG");
prettySad 	= document.createElement("IMG");
sadBoi 		= document.createElement("IMG");
tired 		= document.createElement("IMG");
asleep 		= document.createElement("IMG");
angry 		= document.createElement("IMG");
mad 		= document.createElement("IMG");
devilish 	= document.createElement("IMG");
poop 		= document.createElement("IMG");
var emojis 	= [bigSmile, forcedSmile, normalSmile, bored, disgruntled, malcontent, frustrated, singleTear, prettySad, sadBoi, tired, asleep, angry, mad, devilish, poop];
var selected = emojis.length / 2;

var mouseDown = false;

var valuePresets = [
	[1.00,1.0,1.0,1.0,1.0], //big smile
	[0.69,0.9,0.9,0.9,0.6], //forced smile
	[0.69,0.7,0.7,0.7,0.6], //noraml smile
	[0.50,0.5,0.5,0.5,0.5], // bored
	[0.45,0.4,0.4,0.4,0.4], //disgruntled
	[0.30,0.4,0.4,0.3,0.4], //malcontent
	[0.70,0.3,0.5,0.3,0.7], //frustrated
	[0.50,0.3,0.4,0.2,0.4], //single tear
	[0.30,0.0,0.2,0.0,0.6], //pretty sad
	[0.30,0.0,0.0,0.0,0.3], //sad boi
	[0.10,0.6,0.0,0.6,0.0], //tired
	[0.00,0.2,0.0,0.2,0.0], //asleep
	[0.60,0.3,0.7,0.2,0.7], //angry
	[0.80,0.2,0.9,0.0,0.8], //mad
	[1.00,0.0,1.0,0.0,1.0], //devilish
	[Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] //poop
];

var mouseX;
var amountMoved = 0;
var bigEmojiSize;
var smallEmojiSize;

window.onload = function() {
	document.getElementById("emoji-slider").addEventListener("mousedown", setMouseDown);
	document.addEventListener("mouseup", setMouseUp);
	document.getElementById("emoji-slider").addEventListener("touchstart", setMouseDown);
	document.addEventListener("touchend", setMouseUp);
	document.addEventListener("touchmove", slide);
	document.addEventListener("mousemove", slide);



	smallEmojiSize = window.screen.width * 0.029;
	bigEmojiSize = window.screen.width * 0.044;

	var elem = document.getElementById("emoji-slider");
	var offset = smallEmojiSize * 8;
	elem.style.left = (elem.offsetLeft)+ ((window.screen.width/2) - offset) + "px";
	emojis[0].setAttribute("src", "js/emojis/BigSmile.png");
	emojis[1].setAttribute("src", "js/emojis/ForcedSmile.png");
	emojis[2].setAttribute("src", "js/emojis/NormalSmile.png");
	emojis[3].setAttribute("src", "js/emojis/Bored.png");
	emojis[4].setAttribute("src", "js/emojis/Disgruntled.png");
	emojis[5].setAttribute("src", "js/emojis/Malcontent.png");
	emojis[6].setAttribute("src", "js/emojis/FrustratedAndConfused.png");
	emojis[7].setAttribute("src", "js/emojis/SingleTear.png");
	emojis[8].setAttribute("src", "js/emojis/PrettySad.png");
	emojis[9].setAttribute("src", "js/emojis/SadBoi.png");
	emojis[10].setAttribute("src", "js/emojis/Tired.png");
	emojis[11].setAttribute("src", "js/emojis/Asleep.png");
	emojis[12].setAttribute("src", "js/emojis/Angry.png");
	emojis[13].setAttribute("src", "js/emojis/RedInTheFace.png");
	emojis[14].setAttribute("src", "js/emojis/Devilish.png");
	emojis[15].setAttribute("src", "js/emojis/Poop.png");


	for(var i = 0; i < emojis.length; i++){
		emojis[i].setAttribute("width", smallEmojiSize);
		emojis[i].setAttribute("height", smallEmojiSize);
		if(i === selected){
			emojis[i].setAttribute("width", bigEmojiSize);
			emojis[i].setAttribute("height", bigEmojiSize);
		}
		document.getElementById("emoji-slider").appendChild(emojis[i]);
	}
	document.getElementById("emoji-slider").ondragstart = function() {return false;};
};

function setSelected(s){
	if(s >= 0 && s < emojis.length){
		emojis[selected].setAttribute("width", smallEmojiSize);
		emojis[selected].setAttribute("height", smallEmojiSize);
		selected = s;
		emojis[selected].setAttribute("width", bigEmojiSize);
		emojis[selected].setAttribute("height", bigEmojiSize);
	}
}


function slide(e){
	if(mouseDown === true){
		var elem = document.getElementById("emoji-slider");

		if(selected === 0 && (e.clientX - mouseX) < 0){
			elem.style.left = (elem.offsetLeft + (e.clientX - mouseX)) + "px";
			amountMoved = amountMoved + (e.clientX - mouseX);
			mouseX = e.clientX;	
		} else if(selected === emojis.length-1 && (e.clientX - mouseX) > 0){
			elem.style.left = (elem.offsetLeft + (e.clientX - mouseX)) + "px";
			amountMoved = amountMoved + (e.clientX - mouseX);
			mouseX = e.clientX;
		} else if(selected > 0 && selected < emojis.length-1) {
			elem.style.left = (elem.offsetLeft + (e.clientX - mouseX)) + "px";
			amountMoved = amountMoved + (e.clientX - mouseX);
			mouseX = e.clientX;	
		}

		
		if(amountMoved <= (bigEmojiSize / 2)*-1){
			setSelected(selected+1);
			amountMoved = 0;
		} else if(amountMoved >= (bigEmojiSize / 2)){
			setSelected(selected-1);
			amountMoved = 0;
		}

	}
}

function setMouseDown(e){
	mouseDown = true;
	mouseX = e.clientX;
}

function setMouseUp(){
	mouseDown = false;
}