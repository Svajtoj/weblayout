'use strict';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.burger').onclick = () => {
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.header__menu').classList.toggle('header__menu--active');
  }

  // Slider

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Tabs

  const tabMenuBtnElems = document.querySelectorAll('.tab-menu__btn');
  const tabContentElems = document.querySelectorAll('.tab-content');

  tabMenuBtnElems.forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      tabMenuBtnElems.forEach(function (removeClassBtn) {
        removeClassBtn.classList.remove('tab-menu__btn--active');
      });

      tabContentElems.forEach(function (removeClassContent) {
        removeClassContent.classList.remove('tab-content--active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
      document.querySelector(`[data-path="${path}"]`).classList.add('tab-menu__btn--active');
    });
  });


  $('.accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    // header: '> .accordion-item > .accordion-header'
    header: "h3",
    active: true
  });
});


