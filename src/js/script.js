import {Swiper} from "swiper";

document.addEventListener('DOMContentLoaded', () => {
  let burgerMenuElements = document.querySelectorAll('.main-menu-burger-elem svg');
  let burgerPoint = document.querySelector('.main-menu__burder');
  let burgerPopUp = document.querySelector('.header__burger');

  let phonePoint = document.querySelectorAll('#phone-image');
  let phonePopUp = document.querySelector('.wrap-pop-up-call');


  let body = document.querySelector('body');

  let mailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;


  let sliderMultimedia = new Swiper('.pop-up-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".pop-up-control_next",
      prevEl: ".pop-up-control_prev",
    },
  })


  let sliderMain = new Swiper('.slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".control-slider-next",
      prevEl: ".control-slider-prev",
    },
  })

  let activeSlider;

  let closePopUp = (el, className, e) => {
    el.classList.add(className);
    body.className = 'body_inherit';
  }

  let closeMultimediaPopUp = (el, className) => {
    let popUpSlider = document.querySelector(`.wrap-pop-up-multimedia .pop-up-slider .swiper-wrapper`);

    let active;

    el.classList.add(className);
    body.className = 'body_inherit';

    for (let i = 0; i < popUpSlider.children.length; i++) {
      let slide = popUpSlider.children.item(i);
      if (slide.className.indexOf('swiper-slide-active') !== -1) active = i;
    }

    while (popUpSlider.firstChild) {
      popUpSlider.removeChild(popUpSlider.firstChild);
    }

    sliderMain[activeSlider].slideTo(active);
    sliderMain[activeSlider].update();
  }



  let openPopUp = (el, className) => {
    el.classList.remove(className);
    body.className = 'body_hidden';
  }

  let openMultimediaPopUp = (el, className, slider, content) => {

    let popUpSlider = document.querySelector(`.wrap-pop-up-multimedia .pop-up-slider .swiper-wrapper`);

    let active;

    for (let i = 0; i < content.children.length; i++) {
      let slide = content.children.item(i);
      if (slide.className.indexOf('swiper-slide-active') !== -1) active = i;
    }

    let activeSlide = document.querySelector('.pop-up-multimedia-slide-coll__now');
    let allSlide = document.querySelector('.pop-up-multimedia-slide-coll__all');

    //изменение кол-ва слайдов
    activeSlide.innerHTML = sliderMultimedia.realIndex + 1;
    allSlide.innerHTML = '/ ' + content.children.length;

    // отслеживание скрола


    popUpSlider.append(...content.children);

    sliderMultimedia.on('slideChange', () => {
      console.log(1);
      activeSlide.innerHTML = sliderMultimedia.realIndex + 1;
    })

    sliderMultimedia.slideTo(active);
    sliderMultimedia.update();


    el.classList.remove(className);

    //let video = document.querySelector('.pop-up-multimedia-video video');
    let videoPlay = document.querySelectorAll('.pop-up-multimedia__play .play');

    videoPlay?.forEach((el) => {
      el.addEventListener('click', () => {
        if (!el.classList.contains('pop-up-multimedia__play_none') && el.closest('.pop-up-slider')) {
          let slide = el.closest('.swiper-slide');
          let video = slide.querySelector('video');
          video.play();

          video?.addEventListener('click', () => {
            video.pause();
            el.classList.remove('pop-up-multimedia__play_none');
          })
          el.classList.add('pop-up-multimedia__play_none');
        }
      })
    })

    body.className = 'body_hidden';
  }

  let toggleSubmenu = (el) => {
    if (getComputedStyle(el.nextSibling).display === 'none') {
      el.nextSibling.classList.remove('main-menu-burger-vertical_none');
      el.classList.add('svg-rotate');
    }
    else if (getComputedStyle(el.nextSibling).display === 'block') {
      el.nextSibling.classList.add('main-menu-burger-vertical_none');
      el.classList.remove('svg-rotate');
    }
  }

  phonePoint?.forEach(function(elem) {
    elem.addEventListener("click", () =>  openPopUp(phonePopUp, 'wrap-pop-up-call_none'));
  })

  //burger
  burgerMenuElements?.forEach(function(elem) {
    elem.addEventListener("click", () =>  toggleSubmenu(elem))
  })


  let burgerMenu = document.querySelector('.wrap-pop-up-menu-header');
  burgerMenu?.addEventListener("click", (e) =>  {
    let target = e.target;
    if (target.className === 'wrap-pop-up-menu-header' || target.className === 'wrap-pop-up-menu-header__arrow' || target.closest('.wrap-pop-up-menu-header__arrow'))
      closePopUp(burgerPopUp, 'header__burger_none')
  });

  burgerPoint?.addEventListener("click", () =>  openPopUp(burgerPopUp, 'header__burger_none'));


  phonePopUp?.addEventListener('click', (e) => {
    let target = e.target;
    if (target.className === 'wrap-pop-up-call' || target.className === 'pop-up-call-wrap-headline__cross' || target.closest('.pop-up-call-wrap-headline__cross')) {
      closePopUp(phonePopUp, 'wrap-pop-up-call_none');
    }
  })


  phonePoint?.forEach(function(elem) {
    elem.addEventListener("click", () =>  openPopUp(phonePopUp, 'wrap-pop-up-call_none'));
  })

  let multimedia = document.querySelector('.wrap-pop-up-multimedia');
  let multimediaClose = document.querySelector('.wrap-pop-up-multimedia .pop-up-multimedia__cross .cross');


  let slide = document.querySelectorAll('.swiper-slide'); //swiper-slide slider-right-block

  slide?.forEach(function(elem) {
    elem.addEventListener("click", (e) => {
      let a = e.currentTarget;
      let content = a.closest('.swiper-wrapper');
      let b = a.closest('.container-slider');
      if (!b) return;

      if (b.className.indexOf('container-slider--first') !== -1) {
        activeSlider = 0;
      } else if (b.className.indexOf('container-slider--second') !== -1) {
        activeSlider = 1;
      } else if (b.className.indexOf('container-slider--third') !== -1) {
        activeSlider = 2;
      } else if (b.className.indexOf('container-slider--fourth') !== -1) {
        activeSlider = 3;
      }
      let clone = content.cloneNode(true);

      openMultimediaPopUp(multimedia, 'wrap-pop-up-multimedia_none', e, clone);
    });
  })

  multimediaClose?.addEventListener("click", () =>  closeMultimediaPopUp(multimedia, 'wrap-pop-up-multimedia_none'));

  // certificate pop-up для открытия
  let certificate = document.querySelectorAll('.wrap-certificate-elem');

  certificate?.forEach(function(elem) {
    elem.addEventListener("click", () =>  openPopUp(multimedia, 'wrap-pop-up-multimedia_none'));
  })

  //news
  //cloose filter
  let popUpFilter = document.querySelector('.pop-up-filter');
  let openPopUpFilter = document.querySelector('.news-content-settings-burger');


  openPopUpFilter?.addEventListener("click", (e) => {
    if (e.target.className !== 'pop-up-filter-head-cross__img') {
      popUpFilter.classList.remove('pop-up-filter_none');
      body.className = 'body_hidden';
    }
    else {
      popUpFilter.classList.add('pop-up-filter_none');
      body.className = 'body_inherit';
    }
  })

  popUpFilter?.addEventListener("click", (e)=> {
    if (e.target.className === 'pop-up-filter-head-cross__img') {
      popUpFilter.classList.add('pop-up-filter_none');
      body.className = 'body_inherit';
    }
  })


  //sidebar-popup
  let markOpenPopUpSidebar = document.querySelector('.manager-description-useful');
  let popUpSidebar = document.querySelector('.manager-description-pop-up');
  let popUpSidebarCross = document.querySelector('.manager-description-pop-up-list__cross');

  if (markOpenPopUpSidebar || popUpSidebar) {
    markOpenPopUpSidebar.addEventListener("click", () => {

      if (!popUpSidebar.classList.contains('manager-description-pop-up_none')) {
        popUpSidebar.classList.add('manager-description-pop-up_none');
      } else if (!popUpSidebar.style.display) {
        popUpSidebar.classList.remove('manager-description-pop-up_none');
      }
    })
  }

  if (popUpSidebar || popUpSidebarCross) {
    popUpSidebarCross.addEventListener('click', () => {
      popUpSidebar.classList.add('manager-description-pop-up_none');
    })
  }

  //bearing pop up
  let popUpAccessories = document.querySelector('.wrap-pop-up-accessories');
  popUpAccessories?.addEventListener("click", (e) => {
    let target = e.target.className;
    if (target === 'wrap-pop-up-accessories' || target === 'pop-up-accessories-cross' || target === 'pop-up-accessories-head__cross' || target === 'pop-up-accessories-cross__img') {
      closePopUp(popUpAccessories, 'wrap-pop-up-accessories_none');
    }
  })
  let bearingElem = document.querySelectorAll('.bearing-elem');


  bearingElem?.forEach(function(elem) {
    elem.addEventListener("click", () => openPopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
  })

  //mediateca open slider
  let mediatecaElem = document.querySelectorAll('.mediateca-post');
  mediatecaElem?.forEach(function(elem) { //openFullScreen
    elem.addEventListener("click", () => openPopUp(multimedia,'wrap-pop-up-multimedia_none'));
  })


  //vacancies
  let popUpVacancies = document.querySelector('.wrap-pop-up-vacancies');
  let vacancies = document.querySelectorAll('.vacance-elem');


  vacancies?.forEach(function(elem) {
    elem.addEventListener("click", ()=> openPopUp(popUpVacancies, 'wrap-pop-up-vacancies_none'));
  })


  popUpVacancies?.addEventListener("click", (e) => {
    let target = e.target.className;

    if (target === 'wrap-pop-up-vacancies' || target === 'pop-up-vacancies-head__cross') {
      closePopUp(popUpVacancies, 'wrap-pop-up-vacancies_none');
    }
  });


  //video pop-up-multimedia__play
  //let video = document.querySelector('.pop-up-multimedia-video video');
  //let videoPlay = document.querySelector('.pop-up-multimedia__play .play');

  // let video = document.querySelector('.pop-up-multimedia-video video');
  // let videoPlay = document.querySelectorAll('.pop-up-slider .pop-up-multimedia__play .play');
  // //debugger
  // videoPlay?.forEach((el) => {
  //   el.addEventListener('click', () => {
  //     alert(1);
  //     if (!el.classList.contains('pop-up-multimedia__play_none') && el.closest('.pop-up-slider')) {
  //       alert(1);
  //       video.play();
  //       el.classList.add('pop-up-multimedia__play_none');
  //     }
  //   })
  // })

  // videoPlay?.addEventListener('click', () => {
  //   //debugger
  //   if (!videoPlay.classList.contains('pop-up-multimedia__play_none') && videoPlay.closest('.pop-up-slider')) {
  //     debugger
  //     video.play();
  //     videoPlay.classList.add('pop-up-multimedia__play_none');
  //   }
  // })

  // video?.addEventListener('click', () => {
  //   if (videoPlay.classList.contains('pop-up-multimedia__play_none')) {
  //     video.pause();
  //     videoPlay.classList.remove('pop-up-multimedia__play_none');
  //   }
  // })


  // check form
  let formMailing = document.querySelector('.main-mailing-form__wrap-input-btn');
  formMailing?.addEventListener('submit', (e) => {
    e.preventDefault();
    let mail = document.querySelector('.main-mailing-wrap-input .input-elem__input');

    if (mail.value === '')
      alert('PopUp с текстом ПусТоЕ поле');
    else
      if (mailRegular.test(mail.value))
        alert('send');
      else
        alert('invalid');
  })

  let formConnect = document.querySelector('.footer-top-form');
  formConnect?.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('.footer-top-form .input_name .input-elem__input');
    let mail = document.querySelector('.footer-top-form .input_mail .input-elem__input');
    let phone = document.querySelector('.footer-top-form .input_phone .input-elem__input');

    if (name.value === '' || mail.value === '' || phone.value === '')
      alert('PopUp с текстом Заполните все поля');
    else
      if (!mailRegular.test(mail.value))
        alert('майл не верен')
      else if (!phoneRegular.test(phone.value))
        alert('телефон не верен')
      else
        alert('send');
  })

  let formCall = document.querySelector('.pop-up-call .footer-top-form');
  formCall?.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('.pop-up-call .footer-top-form .input_name .input-elem__input');
    let mail = document.querySelector('.pop-up-call .footer-top-form .input_mail .input-elem__input');
    let phone = document.querySelector('.pop-up-call .footer-top-form .input_phone .input-elem__input');

    if (name.value === '' || mail.value === '' || phone.value === '')
      alert('PopUp с текстом Заполните все поля');
    else
    if (!mailRegular.test(mail.value))
      alert('майл не верен')
    else if (!phoneRegular.test(phone.value))
      alert('телефон не верен')
    else
      alert('send');
  })

  let formVacancies = document.querySelector('.pop-up-vacancies-form');
  formVacancies?.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.querySelector('.pop-up-vacancies-form .input_name .input-elem__input');
    let phone = document.querySelector('.pop-up-vacancies-form .input_phone .input-elem__input');
    let file = document.querySelector('.pop-up-vacancies-form #input_file');

    if (name.value === '' || phone.value === '')
      alert('PopUp с текстом Заполните все поля');
    else if (file.files.length === 0)
      alert('Добавьте файл');
    else
        if (!phoneRegular.test(phone.value))
          alert('телефон не верен')
        else
          alert('send');
  })

  // ui-kit (pop-up с уведомлением)
  let popUpContainer = document.querySelector('.container-pop-up');
  let popUpArrow = document.querySelector('.container-pop-up .pop-up__image');

  popUpContainer?.addEventListener("click", () => {
    popUpContainer.classList.remove('container-pop-up_none')
  })

  popUpArrow?.addEventListener("click", () => {
    popUpContainer.classList.remove('container-pop-up_none')
  })


  let popUpElem = document.querySelectorAll('.pop-up-accessories-list');

  popUpElem?.forEach(function(el) {
    el.querySelector('.pop-up-accessories-list-texts').addEventListener("click", (e)=> {

      let headline = el.querySelector('.pop-up-accessories-list-texts');
      let burger = el.querySelector('.pop-up-accessories-list-list');

      if (burger) {
        headline?.classList.toggle('pop-up-accessories-list-texts_active');
      }

      burger?.classList.toggle('pop-up-accessories-list-list_none');
    });
  })

  // animation btn
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    ["mouseenter", "mouseout"].forEach(evt => {
      button.addEventListener(evt, e => {
        let parentOffset = button.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left - window.pageXOffset,
          relY = e.pageY - parentOffset.top - window.pageYOffset;
        const span = button.getElementsByTagName("span");

        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
      });
    });
  });


  // input file
  let files = document.querySelector('input[type=file]');
  let fileAll = [];

  files?.addEventListener("change", (e) => {
    let fileMap = e.target.files;

    let extension = ['doc', 'docx', 'gif', 'jpg', 'pdf', 'png', 'psd', 'xls', 'zip'];

    let arr = [];

    for (let i = 0; i < fileMap.length; i++) {
      arr.push(fileMap[i].name);
    }

    if (arr.length + fileAll.length > 10) {
      alert("Максимум 10 файлов");
      return;
    }

    for (let i = 0; i < fileMap.length; i++) {
      fileAll.push(fileMap[i]);
    }

    let containerFail = document.querySelector('.pop-up-vacancies-form-put-fail');
    containerFail.classList.remove('pop-up-vacancies-form-put-fail_none');

    let containerElems = document.querySelector('.pop-up-vacancies-form-put-fail-icons-elems');

    arr.forEach((el) => {
      let elem = el.split('.');

      let div = document.createElement('div');
      div.classList.add('pop-up-vacancies-form-put-fail-icons-elem');
      let img = document.createElement('img');
      img.classList.add('pop-up-vacancies-form-put-fail-icons-elem__file');

      if (extension.indexOf(elem[elem.length - 1]) !== -1)
        img.src=`../../images/ui/file-${elem[elem.length - 1]}.png`;
      else
        img.src=`../../images/ui/file-doc.png`;
      let p = document.createElement('p');
      p.classList.add('pop-up-vacancies-form-put-fail-icons-elem__text');

      p.innerHTML = el.substr(0, el.lastIndexOf("."));

      let imgDell = document.createElement('img');
      imgDell.src=`../../images/ui/dell.png`;
      imgDell.classList.add('pop-up-vacancies-form-put-fail-icons__dell');

      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(imgDell);
      containerElems.appendChild(div);
    })

    let dell = document.querySelectorAll('.pop-up-vacancies-form-put-fail-icons__dell');

    dell.forEach(elem => {
      elem.addEventListener('click', (e) => {
        let container = e.target.closest('.pop-up-vacancies-form-put-fail-icons-elem');
        let containerText = container.querySelector('.pop-up-vacancies-form-put-fail-icons-elem__text').innerHTML;

        for (let i = 0; i < fileAll.length; i++) {
          let name = fileAll[i].name.substr(0,fileAll[i].name.lastIndexOf("."));
          if (name === containerText) fileAll.splice(i, 1);
        }

        container.remove();
      })
    })
  })
})


