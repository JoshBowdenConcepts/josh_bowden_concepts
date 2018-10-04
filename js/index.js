console.log('started');

$(window).scroll(function() {

  //if I scroll more than 1000px...
  if($(window).scrollTop() > 100){
    $('nav').css({
      'background-color': 'rgba(56,78,104,1)',
      'margin-top': '0'
    });
  } else {
    $('nav').css({
      'background-color': 'rgba(0,0,0,0)',
      'margin-top': '10px'
    });
  }
});

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

$(document).ready(function() {



  $('#home').click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
  });

  $('#about').click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top - 50
    }, 500);
  });

  $('#my-work-btn').click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 50
    }, 500);
  });

  $('#work-link').click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 50
    }, 500);
  });

  $('#contact-link').click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
  });

});