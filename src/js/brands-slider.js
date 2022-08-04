import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.products-detail-brands-slider', {
    spaceBetween: 20,//26
    slidesPerView: "auto",
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
    pagination: {
      el: ".service-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' service-pagination__point' + '">' + "</span>";
      },
    },
  })
})
