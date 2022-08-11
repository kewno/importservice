import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.news-slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
    //   },
    // // },
    navigation: {
      nextEl: ".news-slider-control .news-slider-control_next",
      prevEl: ".news-slider-control .news-slider-control_prev",
    },
    // pagination: {
    //   el: ".manager .manager-slider-conrol__pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' service-pagination__point' + '">' + "</span>";
    //   },
    // },
  })
})
