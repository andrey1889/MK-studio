const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header__navigation");
const closeMenu = document.querySelector(".close__menu");
const closeMenuActive = document.querySelector(".close__menu--active");

headerBurger.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation--open");
  closeMenu.classList.toggle("close__menu--active")
  headerBurger.classList.toggle("active");

});

closeMenuActive.addEventListener("click", () => {
 headerNavigation.classList.remove("header__navigation--open");
 headerBurger.classList.toggle("active");
  closeMenu.classList.toggle("close__menu--active");
});
