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

/*var valuePresets = [
	//acousticness, danceability, energy, LIVENESS, LOUDNESS, SPEECHINESS, tempo, valence
	//.1, 			.5, 		  .5, 	 .4,   		-6, 		.5, 		120, 	.5  

	[0.03, 0.8, 0.9, 0.5, -3,  0.0, 170, 0.8], //big smile
	[0.03, 0.6, 0.6, 0.7, -5,  0.5, 130, 0.6], //forced smile
	[0.03, 0.7, 0.7, 0.5, -6,  0.5, 150, 0.7], //normal smile
	[0.05, 0.4, 0.2, 0.2, -8,  0.5, 80,  0.2], //bored
	[0.02, 0.4, 0.5, 0.4, -4,  0.5, 110, 0.4], //disgruntled
	[0.02, 0.4, 0.6, 0.3, -5,  0.5, 120, 0.2], //malcontent
	[0.02, 0.3, 0.7, 0.5, -3,  0.5, 150, 0.3], //frustrated
	[0.30, 0.3, 0.4, 0.5, -9,  0.4, 100, 0.3], //single tear
	[0.07, 0.3, 0.2, 0.2, -7,  0.4, 90,  0.2], //pretty sad
	[0.10, 0.3, 0.0, 0.2, -10, 0.3, 80,  0.1], //sad boi
	[0.08, 0.5, 0.0, 0.2, -13, 0.3, 85,  0.1], //tired
	[0.10, 0.3, 0.0, 0.0, -15, 0.3, 75,  0.0], //asleep
	[0.00, 0.4, 0.7, 0.6, -2,  0.1, 80,  0.4], //angry
	[0.00, 0.5, 0.9, 0.4, -3,  0.2, 150, 0.4], //mad
	[0.00, 0.8, 0.7, 0.4, -1,  0.0, 160, 0.4], //devilish
	//poop 
	[Math.random(), 
	Math.random(), 
	Math.random(), 
	Math.random(), 
	(((Math.random() * -10) % 11) - 1),
	Math.random(), 
	(((Math.random() * 100)  % 180) + 80),
	Math.random(),
	Math.random()]
];*/

var valuePresets = [
	//acousticness, danceability, energy, LIVENESS, LOUDNESS, SPEECHINESS, tempo, valence
	//.1, 			.5, 		  .5, 	 .4,   		-6, 		.5, 		120, 	.5  

	[0.03, 0.8, 0.9, -3, 170, 0.8], //big smile
	[0.03, 0.6, 0.6, -5, 130, 0.6], //forced smile
	[0.03, 0.7, 0.7, -6, 150, 0.7], //normal smile
	[0.05, 0.4, 0.2, -8, 80, 0.2], //bored
	[0.02, 0.4, 0.5, -4, 110, 0.4], //disgruntled
	[0.02, 0.4, 0.6, -5, 120, 0.2], //malcontent
	[0.02, 0.3, 0.7, -3, 150, 0.3], //frustrated
	[0.30, 0.3, 0.4, -9, 100, 0.3], //single tear
	[0.07, 0.3, 0.2, -7, 90, 0.2], //pretty sad
	[0.10, 0.3, 0.0, -10, 80, 0.1], //sad boi
	[0.08, 0.5, 0.0, -13, 85, 0.1], //tired
	[0.10, 0.3, 0.0, -15, 75, 0.0], //asleep
	[0.00, 0.4, 0.7, -2, 80, 0.4], //angry
	[0.00, 0.5, 0.9, -3, 150, 0.4], //mad
	[0.00, 0.8, 0.7, -1, 160, 0.4], //devilish
	//poop 
	[Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		(((Math.random() * -10) % 11) - 1),
		Math.random(),
		(((Math.random() * 100) % 180) + 80),
		Math.random(),
		Math.random()
	]
];

var mouseX;
var amountMoved = 0;
var bigEmojiSize;
var smallEmojiSize;
var usingSmartPhone = false;

window.onload = function() {
	document.getElementById("emoji-slider").addEventListener("mousedown", setMouseDown);
	document.addEventListener("mouseup", setMouseUp);
	document.getElementById("emoji-slider").addEventListener("touchstart", setMouseDownPhone);
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
	if(usingSmartPhone === true){
		if(mouseDown === true){
			var elem = document.getElementById("emoji-slider");

			if(selected === 0 && (e.changedTouches[0].clientX - mouseX) < 0){
				elem.style.left = (elem.offsetLeft + (e.changedTouches[0].clientX - mouseX)) + "px";
				amountMoved = amountMoved + (e.changedTouches[0].clientX - mouseX);
				mouseX = e.changedTouches[0].clientX;	
			} else if(selected === emojis.length-1 && (e.changedTouches[0].clientX - mouseX) > 0){
				elem.style.left = (elem.offsetLeft + (e.changedTouches[0].clientX - mouseX)) + "px";
				amountMoved = amountMoved + (e.changedTouches[0].clientX - mouseX);
				mouseX = e.changedTouches[0].clientX;
			} else if(selected > 0 && selected < emojis.length-1) {
				elem.style.left = (elem.offsetLeft + (e.changedTouches[0].clientX - mouseX)) + "px";
				amountMoved = amountMoved + (e.changedTouches[0].clientX - mouseX);
				mouseX = e.changedTouches[0].clientX;	
			}

			
			if(amountMoved <= (bigEmojiSize / 2)*-1){
				setSelected(selected+1);
				amountMoved = 0;
			} else if(amountMoved >= (bigEmojiSize / 2)){
				setSelected(selected-1);
				amountMoved = 0;
			}
		}
	} else {
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
}

function setMouseDown(e){
	mouseDown = true;
	mouseX = e.clientX;
}

function setMouseDownPhone(e){
	mouseDown = true;
	mouseX = e.changedTouches[0].clientX;
	usingSmartPhone = true;
}

function setMouseUp(){
	mouseDown = false;
}

function emojiSubmit(){
	return valuePresets[selected];
}