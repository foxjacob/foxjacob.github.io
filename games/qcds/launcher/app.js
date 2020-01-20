function playSound(){
	var obj=window.navigator.userAgent;
	if(obj.indexOf("iPhone")>0){
		window["playSoundIPhone"]();
	}else{
		document.getElementById("pass").play();
	}
}
function playSoundIPhone(){
	/*var sound = new Howl({
		urls: ['./resource/assets/sound/pass.mp3']
	}).play();*/
	document.getElementById("pass").play();
}
function playPainSound(){
	var obj=window.navigator.userAgent;
	if(obj.indexOf("iPhone")>0){
		window["playSoundPain"]();
	}else{
		document.getElementById("pain").play();
	}
}
function playSoundPain(){
	/*var sound = new Howl({
		urls: ['./resource/assets/sound/pain.mp3']
	}).play();*/
	document.getElementById("pain").play();
}
