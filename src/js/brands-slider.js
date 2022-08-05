import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.products-detail-brands-slider', {
    spaceBetween: 22,//26
    slidesPerView: "auto",
    slidesPerGroup: 7,

    breakpoints: {
      600: {
        spaceBetween: 4,
        slidesPerView: "auto",
        slidesPerGroup: 5,
      }
    },

    navigation: {
      nextEl: ".products-detail-brands .brands-slider-control__elem_next",
      prevEl: ".products-detail-brands .brands-slider-control__elem_prev",
    },
    pagination: {
      el: ".products-detail-brands .brands-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' service-pagination__point' + '">' + "</span>";
      },
      dynamicMainBullets: 3,
    },
  })
})
