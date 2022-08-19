import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.company-slider', {
    //spaceBetween: 50,
    slidesPerView: 1,
    //slidesPerView: 4,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
    //   },
    // },
    navigation: {
      nextEl: ".company-slider .company-slider-control__next",
      prevEl: ".company-slider .company-slider-control__prev",
    },
  })
})
