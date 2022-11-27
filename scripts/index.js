//import { carouselPressLeft, carouselPressRight } from './carousel.js'

const menu = document.querySelector('.menuMediaWrap');

document.querySelector('.headerInfo__menu').addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

document.querySelector('.menuClose').addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
