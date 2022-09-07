document.addEventListener('DOMContentLoaded', () => {
  let burgerMenuElements = document.querySelectorAll('.main-menu-burger-elem svg'); // svg
  let burgerPoint = document.querySelector('.main-menu__burder');
  let burgerPopUp = document.querySelector('.header__burger');
  let burgerClose = document.querySelector('.wrap-pop-up-menu-header__arrow');

  let phonePoint = document.querySelectorAll('#phone-image');
  let phoneClose = document.querySelector('.pop-up-call-wrap-headline__cross');
  let phonePopUp = document.querySelector('.wrap-pop-up-call');


  let body = document.querySelector('body');

  let mailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  let closePopUp = (el, className) => {
    el.classList.add(className);
    body.className = 'body_inherit';
  }

  let openPopUp = (el, className, attr = null) => {
    el.classList.remove(className);
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


  if (burgerClose && burgerPopUp && burgerPoint) {
    burgerClose.addEventListener("click", () =>  closePopUp(burgerPopUp, 'header__burger_none'));
    burgerPoint.addEventListener("click", () =>  openPopUp(burgerPopUp, 'header__burger_none'));
  }


  if (phoneClose && phonePopUp && phonePoint) {
    phoneClose.addEventListener("click", () =>  closePopUp(phonePopUp, 'wrap-pop-up-call_none'));

    phonePoint.forEach(function(elem) {
      elem.addEventListener("click", () =>  openPopUp(phonePopUp, 'wrap-pop-up-call_none'));
    })
  }

  let multimedia = document.querySelector('.wrap-pop-up-multimedia');
  let multimediaClose = document.querySelector('.wrap-pop-up-multimedia .pop-up-multimedia__cross .cross');

  let slide = document.querySelectorAll('.slaider-slide');

  slide?.forEach(function(elem) {
    let slide = elem.querySelector('.slaider-slide__play');
    if (slide)
      elem.addEventListener("click", () => openPopUp(multimedia, 'wrap-pop-up-multimedia_none', 'pop-up-multimedia_video'));
    else
      elem.addEventListener("click", () => openPopUp(multimedia, 'wrap-pop-up-multimedia_none', 'pop-up-multimedia_slider'));
  })

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

  //let settingsToggle = document.querySelector('.news-content-settings');

  openPopUpFilter?.addEventListener("click", (e) => {
    if (e.target.className !== 'pop-up-filter-head-cross__img') {
      popUpFilter.classList.remove('pop-up-filter_none');
      body.className = 'body_hidden';
      //settingsToggle.classList.add('news-content-settings_none');
    }
    else {
      popUpFilter.classList.add('pop-up-filter_none');
      //settingsToggle.classList.remove('news-content-settings_none');
      body.className = 'body_inherit';
    }
  })

  popUpFilter?.addEventListener("click", (e)=> {
    if (e.target.className === 'pop-up-filter-head-cross__img') {
      popUpFilter.classList.add('pop-up-filter_none');
      //settingsToggle.classList.remove('news-content-settings_none');
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
  let bearingElem = document.querySelectorAll('.bearing-elem');


  bearingElem?.forEach(function(elem) {
    elem.addEventListener("click", () => openPopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
  })

  //pop-up подшипников
  let popUpAccessoriesHeadCross = document.querySelector('.pop-up-accessories-head__cross');

  let popUpAccessoriesCross = document.querySelector('.pop-up-accessories-cross');


  if (popUpAccessories || popUpAccessoriesHeadCross) {
    popUpAccessoriesHeadCross.addEventListener("click", () => closePopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
    popUpAccessoriesCross.addEventListener("click", () => closePopUp(popUpAccessories, 'wrap-pop-up-accessories_none'));
  }

  //mediateca open slider
  let mediatecaElem = document.querySelectorAll('.mediateca-post');
  mediatecaElem?.forEach(function(elem) { //openFullScreen
    elem.addEventListener("click", () => openPopUp(multimedia,'wrap-pop-up-multimedia_none'));
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
      closePopUp(popUpVacancies, 'wrap-pop-up-vacancies_none');
    });
  }


  //video
  let video = document.querySelector('.pop-up-multimedia-video video');
  let videoPlay = document.querySelector('.pop-up-multimedia__play .play');

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
})
