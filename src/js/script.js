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

  let multimedia = document.querySelector('.main-page .wrap-pop-up-multimedia');
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

  multimediaClose.onclick = () => closeFullScreen();


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
