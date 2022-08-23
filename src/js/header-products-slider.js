//header-products-slider
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.header-service-slider', {
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
      nextEl: ".service-control_next",
      prevEl: ".service-control_prev",
    },
    pagination: {
      el: ".service-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' service-pagination__point' + '">' + "</span>";
      },
    },
  })
})
