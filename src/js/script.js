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

  if (phonePoint != null) {
    phonePoint.forEach(function(elem) {
      elem.onclick = () => openPhonePopUp();
    })
  }

  //burger
  if (burgerMenuElements != null) {
    burgerMenuElements.forEach(function(elem) {
      elem.onclick = () => toggleSubmenu(elem);
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

  if (burgerClose != null && burgerPopUp != null && burgerPoint != null) {
    burgerClose.onclick = () => closeBurgerPopUp();
    burgerPoint.onclick = () => openBurgerPopUp();
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

  if (phoneClose != null && phonePopUp != null && phonePoint != null) {
    phoneClose.onclick = () => closePhonePopUp();
    phonePoint.onclick = () => openPhonePopUp();
  }

  let multimedia = document.querySelector('.wrap-pop-up-multimedia'); //.main-page .wrap-pop-up-multimedia
  let multimediaClose = document.querySelector('.wrap-pop-up-multimedia .pop-up-multimedia__cross .cross');

  let openFullScreen = () => {
    if (multimedia != null)
      multimedia.style.display = 'block';

   body.style.overflow = 'hidden';
  }

  let closeFullScreen = () => {
    if (multimedia != null)
      multimedia.style.display = 'none';

    body.style.overflow = 'inherit';
  }

  let slide = document.querySelectorAll('.slaider-slide');

  if (slide != null) {
    slide.forEach(function(elem) {
      elem.onclick = () => openFullScreen();
    })
  }

  if (multimediaClose !== null)
    multimediaClose.onclick = () => closeFullScreen();

  // certificate pop-up для открытия
  let certificate = document.querySelectorAll('.wrap-certificate-elem');

  if (certificate != null) {
    certificate.forEach(function(elem) {
      elem.onclick = () => openFullScreen();
    })
  }


  //cloose filter
  let popUpFilter = document.querySelector('.pop-up-filter');
  let crossPopUpFilter = document.querySelector('.pop-up-filter .pop-up-filter-head__cross');

  // news-content-settings-burger
  if (crossPopUpFilter !== null && popUpFilter !== null) {
    crossPopUpFilter.onclick = (e) => {
      popUpFilter.style.display = 'none';
      //console.log(e.target);
    }
  }

  //open filter
  let openBurger = document.querySelector('.news-content-settings-burger');
  if (openBurger != null) {
    openBurger.onclick = (e) => {
      console.log(e.target.className);
      if (e.target.className === 'news-content-settings-burger') { // || e.target.className === 'news-content-settings-burger__headline'

      } //news-content-settings-burger
      //popUpFilter.style.display = 'flex';
    }
  }


  //sidebar-popup
  let markOpenPopUpSidebar = document.querySelector('.manager-description-useful');
  let popUpSidebar = document.querySelector('.manager-description-pop-up');
  let popUpSidebarStatus = false;

  if (markOpenPopUpSidebar != null || popUpSidebar != null) {
    //console.log(markOpenPopUpSidebar);
    markOpenPopUpSidebar.onclick = () => {
      //alert(popUpSidebarStatus);
      if (popUpSidebarStatus === false) {
        popUpSidebarStatus = true;
        popUpSidebar.style.display = 'block';
      } else if (popUpSidebarStatus === true) {
          popUpSidebarStatus = false;
          popUpSidebar.style.display = 'none';
      }
    }
  }

  //pop-up подшипников
  //pop-up-accessories-head__cross
  let popUpAccessories = document.querySelector('.wrap-pop-up-accessories');
  let popUpAccessoriesHeadCross = document.querySelector('.pop-up-accessories-head__cross');

  let popUpAccessoriesCross = document.querySelector('.pop-up-accessories-cross');

  let closePopUpAccessories = () => {
    popUpAccessories.style.display = 'none';
  }

  if (popUpAccessories !== null || popUpAccessoriesHeadCross !== null) {
    popUpAccessoriesHeadCross.onclick = closePopUpAccessories;
    popUpAccessoriesCross.onclick = closePopUpAccessories;
  }

  let openListPopUp = (e) => {
    console.log(e.target.className + "  " + e.target.parentNode.className);
    //e.target конечный элемент
    //e.currentTarget родитель кликнутого

    let className = e.currentTarget.className;
    //parentNode
    if (e.target === 'pop-up-accessories-list-texts' || e.target.parentNode.className === 'pop-up-accessories-list-texts') {
      let list =  document.querySelector(`.${e.target.parentNode.className} .pop-up-accessories-list-list`);
      alert(1);
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

  if (listsPopUp !== null) {
    listsPopUp.forEach(function(elem) {
      elem.onclick = (e) => openListPopUp(e);
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

})
