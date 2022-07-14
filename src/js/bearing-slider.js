import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.bearing-slider', {
    spaceBetween: 350,
    slidesPerView: "auto",
    //slidesPerView: 4,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
    //   },
    // },
  })
})
