
// set timer to:
var countdown_date = new Date("Dec 18, 2020 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countdown_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("demo").innerHTML = days + " dias, " + hours + " horas y " + minutes + " minutos.";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHtml = "done";
    }
}, 1000);
