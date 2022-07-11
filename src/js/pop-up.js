let popUpContainer = document.querySelector('.container-pop-up');
let popUpArrow = document.querySelector('.container-pop-up .pop-up__image');

popUpArrow.onclick = () => {
  alert(1)
}

popUpContainer.onclick = () => closePopUp();

let closePopUp = () => {
  popUpContainer.style.display = 'none';
}
