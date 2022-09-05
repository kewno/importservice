document.addEventListener('DOMContentLoaded', () => {
  let burgerMenuElements = document.querySelectorAll('.main-menu-burger-elem svg'); // svg
  let burgerPoint = document.querySelector('.main-menu__burder');
  let burgerPopUp = document.querySelector('.header__burger');
  let burgerClose = document.querySelector('.wrap-pop-up-menu-header__arrow');

  let phonePoint = document.querySelectorAll('#phone-image');
  let phoneClose = document.querySelector('.pop-up-call-wrap-headline__cross');
  let phonePopUp = document.querySelector('.wrap-pop-up-call');

  let phoneBurgerPoint = document.querySelector('.menu-burger-wrap-phone__call');

  let certificates = document.querySelector('.wrap-certificate-elem');


  let body = document.querySelector('body');

  let mailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  let closePopUp = (el, className) => {
    el.classList.add(className);
    body.className = 'body_inherit';
  }

  let openPopUp = (el, className, attr = null) => {
    el.classList.remove(className);
    //attr ? el.firstChild.classList.add(attr) : null; для главного слайдера pop-up
    body.className = 'body_hidden';
  }


  let toggleSubmenu = (el) => {
    console.log(el);
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

  // let closeBurgerPopUp = () => {
  //   burgerPopUp.classList.add('header__burger_none');
  //   body.className = 'body_inherit';
  // }
  //
  // let openBurgerPopUp = () => {
  //   burgerPopUp.classList.remove('header__burger_none')
  //   body.className = 'body_hidden';
  // }

  if (burgerClose && burgerPopUp && burgerPoint) {
    burgerClose.addEventListener("click", () =>  closePopUp(burgerPopUp, 'header__burger_none'));
    burgerPoint.addEventListener("click", () =>  openPopUp(burgerPopUp, 'header__burger_none'));
  }


  //phone
  // let closePhonePopUp = () => {
  //   phonePopUp.classList.add('wrap-pop-up-call_none');
  //   body.className = 'body_inherit';
  // }
  //
  // let openPhonePopUp = () => {
  //   phonePopUp.classList.remove('wrap-pop-up-call_none');
  //   body.className = 'body_hidden';
  // }

  if (phoneClose && phonePopUp && phonePoint) {
    phoneClose.addEventListener("click", () =>  closePopUp(phonePopUp, 'wrap-pop-up-call_none'));

    phonePoint.forEach(function(elem) {
      elem.addEventListener("click", () =>  openPopUp(phonePopUp, 'wrap-pop-up-call_none'));
    })
  }

  let multimedia = document.querySelector('.wrap-pop-up-multimedia'); //.main-page .wrap-pop-up-multimedia
  let multimediaClose = document.querySelector('.wrap-pop-up-multimedia .pop-up-multimedia__cross .cross');

  // let openFullScreen = () => {
  //   if (multimedia)
  //     multimedia.classList.remove('wrap-pop-up-multimedia_none');
  //
  //  body.className = 'body_hidden';
  // }
  //
  // let closeFullScreen = () => {
  //   if (multimedia)
  //     multimedia.classList.add('wrap-pop-up-multimedia_none');
  //
  //   body.className = 'body_inherit';
  // }

  let slide = document.querySelectorAll('.slaider-slide');

  //if (slide) {
    slide?.forEach(function(elem) {
      //debugger
      //slaider-slide  slaider-slide__play
      let slide = elem.querySelector('.slaider-slide__play');
      if (slide)
        elem.addEventListener("click", () => openPopUp(multimedia, 'wrap-pop-up-multimedia_none', 'pop-up-multimedia_video'));
      else
        elem.addEventListener("click", () => openPopUp(multimedia, 'wrap-pop-up-multimedia_none', 'pop-up-multimedia_slider'));
      //elem.addEventListener("click", () => openPopUp(multimedia, 'wrap-pop-up-multimedia_none'));
    })
  //}

  multimediaClose?.addEventListener("click", () =>  closePopUp(multimedia, 'wrap-pop-up-multimedia_none'));

  // certificate pop-up для открытия
  let certificate = document.querySelectorAll('.wrap-certificate-elem');

  certificate?.forEach(function(elem) {
    elem.addEventListener("click", () =>  openPopUp(multimedia, 'wrap-pop-up-multimedia_none'));
  })

  //news
  //cloose filter
  let popUpFilter = document.querySelector('.pop-up-filter');
  let openPopUpFilter = document.querySelector('.news-content-settings-burger');

  let checboxElems = document.querySelector('.news-content-settings .news-content-settings-checkeds');
  let falsElems = document.querySelector('.news-content-settings .news-content-settings-falls');

  if (openPopUpFilter || popUpFilter) {
    openPopUpFilter.addEventListener("click", (e) => {
      //alert(e.target.className);
      if (e.target.className !== 'pop-up-filter-head-cross__img') {
        //checboxElems.classList.add('news-content-settings-checkeds_none');
        //falsElems.classList.add('news-content-settings-falls_none');
        popUpFilter.classList.remove('pop-up-filter_none');
      }
      else {
        popUpFilter.classList.add('pop-up-filter_none');
      }
    })
  }

  popUpFilter?.addEventListener("click", (e)=> {
   //if (e.target.className !== 'pop-up-filter-head-cross__img')
      //popUpFilter.classList.remove('pop-up-filter_none');
    //else
    if (e.target.className === 'pop-up-filter-head-cross__img') {
      popUpFilter.classList.add('pop-up-filter_none');
      //checboxElems.classList.remove('news-content-settings-checkeds_none');
      //falsElems.classList.remove('news-content-settings-falls_none');
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
      } else if (!popUpSidebar.style.display) { // === 'none'
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
  let bearingElem = document.querySelectorAll('.bearing-elem');


  bearingElem?.forEach(function(elem) {
    elem.addEventListener("click", () => openPopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
  })

  //pop-up подшипников
  //pop-up-accessories-head__cross

  let popUpAccessoriesHeadCross = document.querySelector('.pop-up-accessories-head__cross');

  let popUpAccessoriesCross = document.querySelector('.pop-up-accessories-cross');


  if (popUpAccessories || popUpAccessoriesHeadCross) {
    popUpAccessoriesHeadCross.addEventListener("click", () => closePopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
    popUpAccessoriesCross.addEventListener("click", () => closePopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
  }

  //Открытие шестерней

  // let openListPopUp = (e) => {
  //   if (e.target === 'pop-up-accessories-list-texts' || e.target.parentNode.className === 'pop-up-accessories-list-texts') {
  //     let list =  document.querySelector(`.${e.target.parentNode.className} .pop-up-accessories-list-list`);
  //     if (list.style.display === 'none') {
  //       list.classList.remove('pop-up-accessories-list-texts_none');
  //     } else  {
  //       list.classList.add('pop-up-accessories-list-texts_none');
  //     }
  //   }
  // }

  let listsPopUp = document.querySelectorAll('.pop-up-accessories-list');
  //pop-up-accessories-list-texts - картинка с текстом для click
  //pop-up-accessories-list-list - open list

  listsPopUp?.forEach(function(elem) {
    elem.addEventListener("click", (e) => openListPopUp(e));
  })

  // let toggleSearch = () => {
  //   let footerMenu = document.querySelector ('.main-menu-footer');
  //   let footerInput = document.querySelector ('.footer-bottom-wrap-input');
  //   footerMenu.style.display = 'none';
  //   footerInput.style.display = 'block';
  // }
  //
  // let search = document.querySelector('.footer-bottom-top__href img');
  // search.onclick = () => toggleSearch();

  //mediateca open slider
  let mediatecaElem = document.querySelectorAll('.mediateca-post');
  mediatecaElem?.forEach(function(elem) {
    elem.addEventListener("click", () => openFullScreen());
  })


  //vacancies
  let popUpVacancies = document.querySelector('.wrap-pop-up-vacancies');
  let popUpVacanciesCross = document.querySelector('.wrap-pop-up-vacancies .pop-up-vacancies-head__cross');

  let vacancies = document.querySelectorAll('.vacance-elem');


  vacancies?.forEach(function(elem) {
    elem.addEventListener("click", ()=> openPopUp(popUpVacancies, 'wrap-pop-up-vacancies_none'));
  })


  if (popUpVacanciesCross || popUpVacancies) {
    popUpVacanciesCross.addEventListener("click", () => {
      closePopUp(popUpVacancies, 'wrap-pop-up-vacancies_none');//openPopUp(popUpVacancies, 'wrap-pop-up-vacancies_none')
    });
  }


  //video
  let video = document.querySelector('.pop-up-multimedia-video video');
  let videoPlay = document.querySelector('.pop-up-multimedia__play .play');
  //console.log(videoPlay);
  // if (video && videoPlay)  {
  //   videoPlay.addEventListener('click', () => {
  //     if (!videoPlay.classList.contains('pop-up-multimedia__play_none')) {
  //       video.play();
  //       videoPlay.classList.add('pop-up-multimedia__play_none');
  //     }
  //   })
  //
  //   video.addEventListener('click', () => {
  //     if (videoPlay.classList.contains('pop-up-multimedia__play_none')) {
  //       video.pause();
  //       videoPlay.classList.remove('pop-up-multimedia__play_none');
  //     }
  //   })
  // }

    videoPlay?.addEventListener('click', () => {
      if (!videoPlay.classList.contains('pop-up-multimedia__play_none')) {
        video.play();
        videoPlay.classList.add('pop-up-multimedia__play_none');
      }
    })

    video?.addEventListener('click', () => {
      if (videoPlay.classList.contains('pop-up-multimedia__play_none')) {
        video.pause();
        videoPlay.classList.remove('pop-up-multimedia__play_none');
      }
    })


    // check form
    // main-mailing-wrap-btn
    let formMailing = document.querySelector('.main-mailing-form__wrap-input-btn');
    //let mailingBtn = document.querySelector('.main-mailing-wrap-btn');
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
      let name = document.querySelector('.footer-top-form .input_name .input-elem__input'); //input_phone
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


  // ui-kit (pop-up с уведомлением)
  let popUpContainer = document.querySelector('.container-pop-up');
  let popUpArrow = document.querySelector('.container-pop-up .pop-up__image');

  popUpContainer?.addEventListener("click", () => {
    popUpContainer.classList.remove('container-pop-up_none')
  })

  popUpArrow?.addEventListener("click", () => {
    popUpContainer.classList.remove('container-pop-up_none')
  })
})
