import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.partners-slider', { //partners-group__wrap-elem
    spaceBetween: 30,
    slidesPerView: 1, //slidesPerView: 1
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + ' swiper-pagination__point' + '">' + "</span>";
    //   },
    // // },
    navigation: {
      nextEl: ".partners-control .partners-control__next",
      prevEl: ".partners-control .partners-control__prev",
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

//.partners-group
//  h2.partners-group__headline= headline
//  .partners-group__wrap-elem
//    .swiper-wrapper
//      each el in elems
//        +partnersElem(el.headline, el.img, el.href)

//+partnersElem('НК «Роснефть»', 'partners-1', '/')
//+partnersElem('ПАО «Газпром»', 'partners-2', '/')
//+partnersElem('ПАО «Уралкалий»', 'partners-3', '/')
//+partnersElem('ПАО «Уралкалий»', 'partners-3', '/')
//+partnersElem('ПАО «Газпром»', 'partners-2', '/')
//+partnersElem('НК «Роснефть»', 'partners-1', '/')
//+partnersElem('ПАО «Газпром»', 'partners-2', '/')
//+partnersElem('ПАО «Уралкалий»', 'partners-3', '/')
