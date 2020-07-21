function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Add a 0 if # is under 10 instead of leaving a blank space
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Conversion to 12-hour time instead of 24-hour time
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    document.getElementById('clock').innerHTML =
        currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
}
setInterval(function () {
    updateClock()
}, 1000);

//Typewriter Text

var messages=["HTML","CSS","JavaScript"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h2 = this.getElementsByTagName("h2")[0];
  _h2.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h2.innerHTML=messages[rank];
      var speed =5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h2.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}