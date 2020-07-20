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

//animated nav

