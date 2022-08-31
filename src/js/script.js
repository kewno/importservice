//.main-menu-burger-list
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


  let toggleSubmenu = (el) => {
    if (getComputedStyle(el.nextSibling).display === 'none') {
      el.nextSibling.style.display = 'block';
      el.style.transform = 'rotate(180deg)';
    }
    else if (getComputedStyle(el.nextSibling).display === 'block') {
      el.nextSibling.style.display = 'none';
      el.style.transform = 'rotate(0deg)';
    }
  }

  if (phonePoint ) {
    phonePoint.forEach(function(elem) {
      elem.addEventListener("click", () =>  openPhonePopUp())
    })
  }

  //burger
  if (burgerMenuElements) {
    burgerMenuElements.forEach(function(elem) {
      elem.addEventListener("click", () =>  toggleSubmenu(elem))
    })
  }

  let closeBurgerPopUp = () => {
    burgerPopUp.style.display = 'none';
    body.style.overflow = 'inherit';
  }

  let openBurgerPopUp = () => {
    burgerPopUp.style.display = 'block';
    body.style.overflow = 'hidden';
  }

  if (burgerClose && burgerPopUp && burgerPoint) {
    burgerClose.addEventListener("click", () =>  closeBurgerPopUp())
    burgerPoint.addEventListener("click", () =>  openBurgerPopUp())
  }


  //phone
  let closePhonePopUp = () => {
    phonePopUp.style.display = 'none';
    body.style.overflow = 'inherit';
  }

  let openPhonePopUp = () => {
    phonePopUp.style.display = 'flex';
    body.style.overflow = 'hidden';
  }

  if (phoneClose && phonePopUp && phonePoint) {
    phoneClose.addEventListener("click", () =>  closePhonePopUp())
    //phonePoint.addEventListener("click", () =>  openPhonePopUp())
    phonePoint.forEach(function(elem) {
      elem.addEventListener("click", () =>  openPhonePopUp())
    })
  }

  let multimedia = document.querySelector('.wrap-pop-up-multimedia'); //.main-page .wrap-pop-up-multimedia
  let multimediaClose = document.querySelector('.wrap-pop-up-multimedia .pop-up-multimedia__cross .cross');

  let openFullScreen = () => {
    if (multimedia)
      multimedia.style.display = 'block';

   body.style.overflow = 'hidden';
  }

  let closeFullScreen = () => {
    if (multimedia)
      multimedia.style.display = 'none';

    body.style.overflow = 'inherit';
  }

  let slide = document.querySelectorAll('.slaider-slide');

  if (slide) {
    slide.forEach(function(elem) {
      elem.addEventListener("click", () =>  openFullScreen())
    })
  }

  if (multimediaClose)
    multimediaClose.addEventListener("click", () =>  closeFullScreen())

  // certificate pop-up для открытия
  let certificate = document.querySelectorAll('.wrap-certificate-elem');

  if (certificate) {
    certificate.forEach(function(elem) {
      elem.addEventListener("click", () =>  openFullScreen())
    })
  }


  //news
  //cloose filter
  let popUpFilter = document.querySelector('.pop-up-filter');
  let crossPopUpFilter = document.querySelector('.pop-up-filter .pop-up-filter-head__cross');
  let openPopUpFilter = document.querySelector('.news-content-settings-burger');

  // news-content-settings-burger
  if (crossPopUpFilter && popUpFilter) {
    // crossPopUpFilter.onclick = (e) => {
    //   popUpFilter.style.display = 'none';
    // }
    crossPopUpFilter.addEventListener("click", (e) => {
      popUpFilter.style.display = 'none';
    })
  }

  if (openPopUpFilter) {
    // openPopUpFilter.onclick = (e) => {
    //   if (e.target.className !== 'pop-up-filter-head-cross__img')
    //     popUpFilter.style.display = 'block';
    // }
    crossPopUpFilter.addEventListener("click", (e) => {
      if (e.target.className !== 'pop-up-filter-head-cross__img')
        popUpFilter.style.display = 'block';
    })
  }

  //open filter
  // let openBurger = document.querySelector('.news-content-settings-burger');
  // if (openBurger) {
  //   openBurger.onclick = (e) => {
  //     if (e.target.className === 'news-content-settings-burger') { // || e.target.className === 'news-content-settings-burger__headline'
  //
  //     } //news-content-settings-burger
  //     //popUpFilter.style.display = 'flex';
  //   }
  // }


  //sidebar-popup
  let markOpenPopUpSidebar = document.querySelector('.manager-description-useful');
  let popUpSidebar = document.querySelector('.manager-description-pop-up');
  let popUpSidebarStatus = false;

  if (markOpenPopUpSidebar || popUpSidebar) {
    markOpenPopUpSidebar.addEventListener("click", () => {
      if (popUpSidebarStatus === false) {
        popUpSidebarStatus = true;
        popUpSidebar.style.display = 'block';
      } else if (popUpSidebarStatus === true) {
        popUpSidebarStatus = false;
        popUpSidebar.style.display = 'none';
      }
    })

    // markOpenPopUpSidebar.onclick = () => {
    //   if (popUpSidebarStatus === false) {
    //     popUpSidebarStatus = true;
    //     popUpSidebar.style.display = 'block';
    //   } else if (popUpSidebarStatus === true) {
    //       popUpSidebarStatus = false;
    //       popUpSidebar.style.display = 'none';
    //   }
    // }
  }

  //bearing pop up
  let popUpAccessories = document.querySelector('.wrap-pop-up-accessories');
  let bearingElem = document.querySelectorAll('.bearing-elem');

  let openBearingPopUp = () => {
    popUpAccessories.style.display = 'flex';
  }

  if (bearingElem) {
    bearingElem.forEach(function(elem) {
      elem.addEventListener("click", () => openBearingPopUp());
    })
  }

  //pop-up подшипников
  //pop-up-accessories-head__cross

  let popUpAccessoriesHeadCross = document.querySelector('.pop-up-accessories-head__cross');

  let popUpAccessoriesCross = document.querySelector('.pop-up-accessories-cross');

  let closePopUpAccessories = () => {
    popUpAccessories.style.display = 'none';
  }

  if (popUpAccessories || popUpAccessoriesHeadCross) {
    // popUpAccessoriesHeadCross.onclick = closePopUpAccessories;
    // popUpAccessoriesCross.onclick = closePopUpAccessories;
    popUpAccessoriesHeadCross.addEventListener("click", () => closePopUpAccessories());
    popUpAccessoriesCross.addEventListener("click", () => closePopUpAccessories());
  }

  let openListPopUp = (e) => {
    //e.target конечный элемент
    //e.currentTarget родитель кликнутого

    let className = e.currentTarget.className;
    //parentNode
    if (e.target === 'pop-up-accessories-list-texts' || e.target.parentNode.className === 'pop-up-accessories-list-texts') {
      let list =  document.querySelector(`.${e.target.parentNode.className} .pop-up-accessories-list-list`);
      if (list.style.display === 'none') {
        list.style.display = 'flex';
      } else  {
        list.style.display = 'none';
      }
    }

  }

  let listsPopUp = document.querySelectorAll('.pop-up-accessories-list');
  //pop-up-accessories-list-texts - картинка с текстом для click
  //pop-up-accessories-list-list - open list

  if (listsPopUp) {
    listsPopUp.forEach(function(elem) {
      //elem.onclick = (e) => openListPopUp(e);
      elem.addEventListener("click", (e) => openListPopUp(e));
    })
  }

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
  if (mediatecaElem) {
    mediatecaElem.forEach(function(elem) {
      elem.addEventListener("click", () => openFullScreen());
    })
  }


  //vacancies
  let popUpVacancies = document.querySelector('.wrap-pop-up-vacancies');
  let popUpVacanciesCross = document.querySelector('.wrap-pop-up-vacancies .pop-up-vacancies-head__cross');
  if (popUpVacanciesCross || popUpVacancies) {
    popUpVacanciesCross.addEventListener("click", () => {
      //popUpVacancies.style.display = 'none';
      popUpVacancies.classList.add('wrap-pop-up-vacancies_none');
      //popUpVacancies.className ='.wrap-pop-up-vacancies_none';
    });
  }

  //open bearing pop-up


  //wrap-pop-up-vacancies
})
