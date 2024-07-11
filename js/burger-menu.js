
const headerNavigation = document.querySelector(".header__navigation");
const burger = document.querySelector('.burger');
const headerLinks = document.querySelector(".header__links");
const headerLogo = document.querySelector(".header__logo");
//кнопка бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNavigation.classList.toggle("header__navigation--open");
  headerLogo.classList.toggle("header__logo--close");
});


// headerBurger.addEventListener("click", () => {
//   headerNavigation.classList.toggle("header__navigation--open");
//  headerBurger.classList.toggle("header__burger--close");
//  closeMenu.classList.toggle("close__menu--open");

// });

// closeMenu.addEventListener("click", () => {
//   headerNavigation.classList.remove("header__navigation--open");
//  headerBurger.classList.remove("header__burger--close");
//  closeMenu.classList.remove("close__menu--open");
// });


