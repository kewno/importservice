//.main-menu-burger-list
document.addEventListener('DOMContentLoaded', () => {
  let burgerMenuElements = document.querySelectorAll('.main-menu-burger-elem svg'); // svg
  //alert(1);

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

  if (burgerMenuElements != null)
    burgerMenuElements.forEach(function(item, i, arr) {
      //console.log(item)
      item.onclick = () => toggleSubmenu(item)
    })

})
