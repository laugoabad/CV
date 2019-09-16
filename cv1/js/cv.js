jQuery(function ($) {

  function stopAnimation() {
    $('#espaniol').removeClass('.w3-animate-fading');
    $('#english').removeClass('.w3-animate-fading, .delay')
  };

  function playAnimation() {
    $('#espaniol').addClass('.w3-animate-fading');
    $('#english').addClass('.w3-animate-fading, .delay')
  }
  
  $(window).ready(stopAnimation);
  $(window).ready(playAnimation);

});
