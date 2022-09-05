import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".control-slider-next",
      prevEl: ".control-slider-prev",
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.service-detail-slider .slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".service-detail-navigation__next",
      prevEl: ".service-detail-navigation__prev",
    },
    pagination: {
      el: ".service-detail-navigation-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + ' service-detail-navigation-pagination__elem' + '">' + '<img alt="pagination" src="../../images/service/service-detail-pag-6.png"/>' + "</div>";
      },
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.pop-up-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".pop-up-multimedia__wrap-bottom .pop-up-control_next",
      prevEl: ".pop-up-multimedia__wrap-bottom .pop-up-control_prev",
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.partners-slider', {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".partners-control .partners-control__next",
      prevEl: ".partners-control .partners-control__prev",
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.news-slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".news-slider-control .news-slider-control_next",
      prevEl: ".news-slider-control .news-slider-control_prev",
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.manager-slider', {
    slidesPerView: 1,
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

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.header-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".control-header-slider-next",
      prevEl: ".control-header-slider-prev",
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' slider-pagination__point' + '">' + "</span>";
      },
    },
  })
})

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.header-service-slider', {
    slidesPerView: 1,
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

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.header-products-slider', {
    slidesPerView: 1,
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


document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.company-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".company-slider .company-slider-control__next",
      prevEl: ".company-slider .company-slider-control__prev",
    },
  })
})


//func
let arrowSlider = (slider, [arrowNext, arrowPrev]) => {
  return new Swiper('.header-service-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".header-service-slider .service-control .service-control_next",
      prevEl: ".header-service-slider .service-control .service-control_prev",
    },
  })
}

document.addEventListener('DOMContentLoaded', () => {
  arrowSlider('.header-service-slider', ['.service-control_next', '.service-control_prev'])
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


document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.bearing-slider', {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".main-bearing-slider .main-bearing-slider-control__next",
      prevEl: ".main-bearing-slider .main-bearing-slider-control__prev",
    },
  })
})
