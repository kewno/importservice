let popUpContainer = document.querySelector('.container-pop-up');
let popUpArrow = document.querySelector('.container-pop-up .pop-up__image');

if (popUpArrow !== null)
  popUpArrow.onclick = () => {
    alert(1)
  }

if (popUpContainer !== null)
  popUpContainer.onclick = () => closePopUp();

let closePopUp = () => {
  popUpContainer.style.display = 'none';
}
