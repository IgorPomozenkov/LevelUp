const btnsEl = document.querySelectorAll('#order-btn');
const orderFormEl = document.getElementById('order-form');
const minutesEl = document.getElementById('timer-min');
const secondsEl = document.getElementById('timer-sec');

const time = 30;
const date = new Date();
const deadline = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + time);
let timerId = null;

function hadleOrderBtn() {
  orderFormEl.scrollIntoView({behavior: "smooth", block: "end"});
};

btnsEl.forEach(btn => btn.addEventListener('click', hadleOrderBtn));

function timer() {
  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
    return;
  }

  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
};

timer();
timerId = setInterval(timer, 1000);
