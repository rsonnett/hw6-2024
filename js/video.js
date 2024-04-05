var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false 

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log('The vide volume is ' + video.volume)
 });


 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowed down speed is " + video.playbackRate);
	video.playbackRate *= .9;

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Sped up speed is " + video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
    	video.currentTime += 10;
		console.log('10 seconds forward, current time is ' + video.currentTime)
		if (video.currentTime >= video.duration) {
			video.currentTime = 0
		}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video Muted");
	if (video.muted == true) {
		video.muted = false
		document.querySelector('#mute').innerHTML = 'Mute'
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School!");
	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original!");
	video.classList.remove("oldSchool")
});


