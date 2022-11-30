const toggleButton = document.getElementsByClassName("toogle")[0];
const navbarItem = document.getElementsByClassName("header-navigation__item");
toggleButton.addEventListener("click", function () {
  // transition navbar item
  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.toggle("active");
  }
});