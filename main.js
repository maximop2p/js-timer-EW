

var countdown_date = new Date("Dec 18, 2020 00:00:00").getTime();
var set = false;
var x = setInterval(function() {
    if (set == true)
        return;
    var now = new Date().getTime();

    var distance = countdown_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var date = new Date(countdown_date).toLocaleDateString();
    
    document.getElementById("date").innerHTML = "timer a " + date;
    document.getElementById("demo").innerHTML = days + " dias, " + hours + " horas y " + minutes + " minutos...";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHtml = "done";
    }
}, 1000);

window.getTimeRemaining = function(endtime) {
    var date = new Date(endtime).toLocaleDateString();
    document.getElementById("date").innerHTML = "timer a " + date;
    var t = Date.parse(endtime) - (new Date()).getTime();
    var minutes = Math.floor( (t/1000/60) % 60);
    var hours = Math.floor( (t/(1000*60*60)) % 24);
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
    };
  }
  
window.initializeClock = function(clockId, dateId) {
      var clock = document.getElementById(clockId);
      var deadline = document.getElementById(dateId).value;

      if (!deadline)
        return;
        clearInterval(timeinterval);
      set = true;
      var timeinterval = setInterval(function(){
        var t = getTimeRemaining(deadline);
        clock.innerHTML = t.days + " dias, " + t.hours + " horas y " + t.minutes + " minutos...";
        if (t.total <= 0){
          clearInterval(timeinterval);
        }
      }, 1000);
      
}

