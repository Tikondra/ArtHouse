'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuBtn = document.querySelector('.header__nav-btn');
  var btnSvg = document.querySelector('.ham1');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
    menuBtn.classList.toggle('header__open-menu--active');
    btnSvg.classList.toggle('active');
  });
})();
