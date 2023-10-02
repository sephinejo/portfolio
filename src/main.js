const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY < homeHeight / 2) {
    arrowup.style.opacity = 0;
  } else {
    arrowup.style.opacity = 1;
  }
});

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
