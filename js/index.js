console.log('started');

// Create name typewriter
(function () {
    var i = 0;
    var txt = 'Hi, I\'m Josh Bowden.';
    var txt2 = 'A full stack web developer with an eye for design and a nack for marketing.';
    var speed = 60;
  
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("header-one").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else if (i < ( txt.length + txt2.length )) {
        document.getElementById("header-two").innerHTML += txt2.charAt(i - txt.length);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        $('#my-work-btn').fadeIn();
      }
    }
  
    typeWriter();
  
  }());