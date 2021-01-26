var end = new Date('02/13/2021 12:01 AM');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('days1').innerHTML = days;
    document.getElementById('hours1').innerHTML = hours;
    document.getElementById('minutes1').innerHTML = minutes;
    document.getElementById('seconds1').innerHTML = seconds;

    document.getElementById('days2').innerHTML = days;
    document.getElementById('hours2').innerHTML = hours;
    document.getElementById('minutes2').innerHTML = minutes;
    document.getElementById('seconds2').innerHTML = seconds;
  }

  timer = setInterval(showRemaining, 1000);