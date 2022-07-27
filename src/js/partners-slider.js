import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.partners-group__wrap-elem', { //partners-slider
    //spaceBetween: 13,
    slidesPerView: 1,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
    //   },
    // // },
    navigation: {
      nextEl: ".control-header-slider-next",
      prevEl: ".control-header-slider-prev",
    },
    // pagination: {
    //   el: ".slider-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' slider-pagination__point' + '">' + "</span>";
    //   },
    // },
  })
})
