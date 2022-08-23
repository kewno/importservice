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
      nextEl: ".service-detail-navigation__next",
      prevEl: ".service-detail-navigation__prev",
    },
  })
})
