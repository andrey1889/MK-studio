const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header__navigation");

headerBurger.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation--open");
});
