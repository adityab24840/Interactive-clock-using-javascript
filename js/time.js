var noon = 12;
var morning = 6;
var day = 12;
var evening = 18;

var showCurrentTime = function()
{
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian;

    
    document.getElementById("print-time").innerHTML = clockTime;
};

var updateClock = function() 
{
    var time = new Date().getHours();

    var image = "/images/day.JPG";

    if (time > 6 && time < 12)
    {
        image = "/images/morning.jpg";
    }
    else if (time > 12 && time < 17)
    {
        image = "/images/day.jpg";
    }
    else if (time > 17 && time < 21)
    {
        image = "/images/evening.jpg";
    }
    else if (time > 21 && time > 6){
        image = "/images/night.jpg";
    }

    wallpaper.src = image;

    showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);