jQuery(function($) {

  var video = document.getElementById("video");

function desplegarMenu() {
  $("#about, #portfolio, #contact, #experience").click(function(){
    $('.about p.animate, .contact p.animate, .portfolio p.animate, .experience p.animate, .h2.animate, .h5.animate, hr.animate').removeClass('animate');
    var opcion = $(this).html();
    opcion ='.'+opcion.toLowerCase()+' p';
    $(opcion).addClass('animate');
    $('.menu').css({opacity: '1'});
    $('.title').css({opacity: '0'});
    var screenWidth = screen.width;
    if (screenWidth < 426) {
      $('.titulo1, work, hr').addClass('animate');
    }
  });
};

function wrapMenu(){
  $('.about p, .portfolio p, .experience p, .contact p').click(function() {
    $('.about p.animate, .portfolio p.animate, .experience p.animate, .contact p.animate, .h2.animate, .h5.animate, hr.animate, #video.animate').removeClass('animate');
    $('.title').css({opacity: '1'});
  });
};

  function playVideo() {
    video.play();
  //   var videoPlay = true;
  //   $('#despliegue, #h ').click(function() {
  //     if(videoPlay) {
  //     video.play();
  //     videoPlay = false;
  //   } else {
  //     video.pause();
  //     videoPlay = true;
  //   }
  // });
};

$(window).ready(desplegarMenu);
$(window).ready(wrapMenu);
$(window).ready(playVideo);
  });
