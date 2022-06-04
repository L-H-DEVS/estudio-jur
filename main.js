/* Datos Generales */
$(document).ready(function () {
  const today = new Date();
  const year = today.getFullYear();
  const telf = "+51 936 835 902";
  const whatsapp = "https://api.whatsapp.com/send?phone=51936835902";
  const direccion = "Jirón Sinchi Roca 7393 Urb. El Trébol II Etapa, Los Olivos - Lima 15302";

  let yearTag = $('#year');
  let telfTag = $('.telf');
  let dirTag = $('.address');
  let whatsBtn = $('.btn-whatsapp');

  yearTag.text(year);
  telfTag.text(telf);
  dirTag.text(direccion);
  whatsBtn.attr("href", whatsapp);
});

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

/*Fixed Header*/
$(document).ready(function() {
  let fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function() {
      let projectsOffset = $('#nuestro-equipo').offset().top;
      let windowScroll = $(window).scrollTop();

      if (windowScroll >= projectsOffset) {
          fixedHeader.css( 'margin-top', 0);
      } else if (windowScroll <= projectsOffset/2) {
          fixedHeader.css( 'margin-top', '-80px');
      }
  });
});