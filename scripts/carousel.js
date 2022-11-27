let prev = 0;
let next = 1;

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const sliderCards = document.querySelectorAll('#slider-card');

function btnPrevPress() {
  btnNext.style.opacity = '1';

  if (prev <= 0) {
    return;
  }

  next--;
  sliderCards[next].style.display = 'none';

  prev--;
  sliderCards[prev].style.display = 'block';
  sliderCards[prev].style.animation = 'sliderPrev .5s ease-in-out both';

  if (prev == 0) {
    btnPrev.style.opacity = '0.5';
  }
};

function btnNextPress() {
  btnPrev.style.opacity = '1';

  if (next >= sliderCards.length) {
    return;
  }

  sliderCards[prev].style.display = 'none';
  prev++;

  sliderCards[next].style.display = 'block';
  sliderCards[next].style.animation = 'sliderNext .5s ease-in-out both';
  next++;

  if (next === sliderCards.length) {
    btnNext.style.opacity = '0.5';
  }
};

if (!!btnPrev) {
  if (prev == 0) btnPrev.style.opacity = '0.5';
}

btnPrev.addEventListener('click', btnPrevPress);
btnNext.addEventListener('click', btnNextPress);
