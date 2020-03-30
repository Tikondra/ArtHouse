'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuBtn = document.querySelector('.header__nav-btn');
  var btnSvg = document.querySelector('.ham1');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
  });
})();
//слайдер
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true
  });
});
