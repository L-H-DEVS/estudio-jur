/* Mobile Menu */
$(document).ready(function () {
  let iter = 1;

  $('#btnMenu').on('click', function (e) {
      e.preventDefault();

      if(iter == 1) {
        $('.menu-mobile .menu-main').animate({right: 0}, 300, function () {
          iter = 0;
        });
      } else {
          $('.menu-mobile .menu-main').animate({right: '-100%'}, 300, function () {
              iter = 1;
          });
      }
  });

  $('.menu-mobile .menu-main a').on('click', function(){
      $('.menu-mobile .menu-main').animate({right: '-100%'}, 300, function () {
          iter = 1;
      });
  });
});