// DOM selector & variable
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var secDegrees = 6;
var minDegrees = 6;
var hourDegrees = 6;
// ===========


// ===========
// setting the interval for seconds
 setInterval (function() {
    second.style.transform = "rotate(" + secDegrees + "deg)";
    secDegrees += 6
    console.log(secDegrees);
}, 1000);

// setting the interval for minute
setInterval (function() {
    minute.style.transform = "rotate(" + minDegrees + "deg)";
    minDegrees += 6;
}, 60000);

// setting the interval for hour
setInterval (function() {
    hour.style.transform = "rotate(" + hourDegrees + "deg)";
    hourDegrees += 6;
}, 3600000);


// =====attempted to display actual time ========= //
function allAboutClock() {
    var now = new Date();
    
    // let hr = date.getHours();
    // let min = date.getHours();
    // let sec = date.getHours();
    
}
