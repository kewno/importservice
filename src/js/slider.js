import  {Swiper,  Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([ EffectFade, Navigation, Pagination, Thumbs]);


let arrowSlider = ({slider, perView = 1, next = null, prev = null, pagination = null, spaceBetween= 0}) => {
  //debugger
  if (next && prev && pagination) {
    return new Swiper(`.${slider}`, {
      //modules: [Pagination, Navigation],
      slidesPerView: `${perView}`,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: `${next}`,
        prevEl: `${prev}`,
      },
      pagination: {
        el: `.${pagination.el}`,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ` ${pagination.className}` + '">' + "</span>";
        },
      }
    })
  }
  else if (next && prev) {
    return new Swiper(`.${slider}`, {
      //modules: [Navigation],
      slidesPerView: `${perView}`,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: `${next}`,
        prevEl: `${prev}`,
      }
    })
  }
  else if (pagination) {
    return new Swiper(`.${slider}`, {
      //modules: [Pagination],
      slidesPerView: `${perView}`,
      spaceBetween: spaceBetween,
      pagination: {
        el: `.${pagination.el}`,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ` ${pagination.className}` + '">' + "</span>";
        },
      },
    })
  }
  else {
    return new Swiper(`.${slider}`, {
      slidesPerView: `${perView}`
    })
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // arrowSlider({
  //   slider: 'slider',
  //   perView: 1,
  //   next: '.control-slider-next',
  //   prev: '.control-slider-prev'
  // })

  arrowSlider({
    slider: 'header-slider',
    perView: 1,
    next: '.control-header-slider-next',
    prev: '.control-header-slider-prev',
    pagination: {
      el : 'service-pagination',
      className: 'service-pagination__point'
    }
  })

  arrowSlider({
    slider: 'pop-up-slider',
    next: '.pop-up-multimedia__wrap-bottom .pop-up-control_next',
    prev: '.pop-up-multimedia__wrap-bottom .pop-up-control_prev'
  })


  arrowSlider({
    slider: 'bearing-slider',
    perView: 'auto',
    next: '.main-bearing-slider .main-bearing-slider-control__next',
    prev: '.main-bearing-slider .main-bearing-slider-control__prev'
  })
  //header-products-slider
  arrowSlider({
    slider: 'header-service-slider',
    perView: 1,
    next: '.service-control_next',
    prev: '.service-control_prev',
    pagination: {
      el: 'service-pagination',
      className: 'service-pagination__point'
    }
  })

  arrowSlider({
    slider: 'news-slider',
    perView: 'auto',
    spaceBetween: 30,
    next: '.news-slider-control .news-slider-control_next',
    prev: '.news-slider-control .news-slider-control_prev',
  })

  let sliders = document.querySelectorAll('.manager-slider');
  //console.log(sliders.closest('div')); manager-slider
  sliders.forEach(el => {
    //console.log(el.parentNode.parentNode.parentNode.className);
    //console.log(`${el.parentNode.parentNode.parentNode.className} .manager-slider`);
      arrowSlider({
        slider: `${el.parentNode.parentNode.parentNode.className} .manager-slider`,
        perView: 1,
        next: '.manager .manager-slider-conrol-arrow__next',
        prev: '.manager .manager-slider-conrol-arrow__prev',
        pagination: {
          el: `${el.parentNode.parentNode.parentNode.className} .manager .manager-slider-conrol__pagination`,
          className: 'service-pagination__point'
        }
      })
  })
  // sliders.forEach(el =>  {
  //   console.log(el.className)
  //   debugger
  //   arrowSlider({
  //     slider: `${el.className}`,
  //     perView: 1,
  //     next: '.manager .manager-slider-conrol-arrow__next',
  //     prev: '.manager .manager-slider-conrol-arrow__prev',
  //     pagination: {
  //       el: 'manager .manager-slider-conrol__pagination',
  //       className: 'service-pagination__point'
  //     }
  //   })
  // });

  // arrowSlider({
  //   slider: 'news-detail__wrap-manager .manager-slider',
  //   perView: 1,
  //   next: '.manager .manager-slider-conrol-arrow__next',
  //   prev: '.manager .manager-slider-conrol-arrow__prev',
  //   pagination: {
  //     el: 'manager .manager-slider-conrol__pagination',
  //     className: 'service-pagination__point'
  //   }
  // })
  //
  // arrowSlider({
  //   slider: 'manager-slider',
  //   perView: 1,
  //   next: '.manager .manager-slider-conrol-arrow__next',
  //   prev: '.manager .manager-slider-conrol-arrow__prev',
  //   pagination: {
  //     el: 'manager .manager-slider-conrol__pagination',
  //     className: 'service-pagination__point'
  //   }
  // })

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
