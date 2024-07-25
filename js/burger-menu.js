
const headerNavigation = document.querySelector(".header__navigation");
const  headerBurger = document.querySelector('.header__burger');
const headerLinks = document.querySelector(".header__links");
const closeMenu = document.querySelector(".close__menu");


headerBurger.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation--open");
 headerBurger.classList.toggle("header__burger--close");
 closeMenu.classList.toggle("close__menu--open");

});

closeMenu.addEventListener("click", () => {
  headerNavigation.classList.remove("header__navigation--open");
 headerBurger.classList.remove("header__burger--close");
 closeMenu.classList.remove("close__menu--open");
});


//кнопка бургер
// burger.addEventListener('click', () => {
//   burger.classList.toggle('active');
//   headerNavigation.classList.toggle("header__navigation--open");
//   headerLogo.classList.toggle("header__logo--close");
// });
