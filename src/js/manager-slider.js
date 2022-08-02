import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.manager-slider', {
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
      nextEl: ".manager .manager-slider-conrol-arrow__next",
      prevEl: ".manager .manager-slider-conrol-arrow__prev",
    },
    pagination: {
      el: ".manager .manager-slider-conrol__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' service-pagination__point' + '">' + "</span>";
      },
    },
  })
})
