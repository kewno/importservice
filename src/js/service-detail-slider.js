//service-detail-slider
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.service-detail-slider .slider', {
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
      nextEl: ".pop-up-multimedia__wrap-bottom .pop-up-control_next",
      prevEl: ".pop-up-multimedia__wrap-bottom .pop-up-control_prev",
    },
  })
})
