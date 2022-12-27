const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');
const $timer = document.querySelector('.timer');
const $clicks = document.querySelector('.clicks');
const $modal = document.querySelector('.modal-background');
const $startButton = document.querySelector('.start-button');
const $start = document.querySelector('.start');
const $end = document.querySelector('.end');
const $clickTotal = document.querySelector('.click-total');
const $replay = document.querySelector('.replay');
const $cancel = document.querySelector('.cancel');

const directions = ['top', 'bottom', 'left', 'right'];
let clicks = 0;
let timer = 30;
let timerInterval = null;

$button.addEventListener('click', () => {
  handleBackground();
  handleButton();
  countClicks();
});

$startButton.addEventListener('click', () => {
  handleBackground();
  handleButton();
  handleTimer();
  $modal.classList.toggle('hidden');
});

$replay.addEventListener('click', () => {
  timer = 30;
  clicks = 0;
  $timer.textContent = `Time Remaining: ${timer}`;
  $clicks.textContent = `Clicks: ${clicks}`;
  handleBackground();
  handleButton();
  handleTimer();
  $modal.classList.toggle('hidden');
});

$cancel.addEventListener('click', () => {
  $modal.classList.toggle('hidden');
  $button.removeEventListener('click', () => {
    handleBackground();
    handleButton();
    countClicks();
  });
});

function handleBackground(event) {
  const color1 = createBackgroundColor();
  const color2 = createBackgroundColor();
  const color3 = createBackgroundColor();
  const direction = directions[Math.floor(Math.random() * directions.length)];
  $body.style.background = `linear-gradient(to ${direction}, ${color1}, ${color2}, ${color3}, ${color1})`;
  $body.style.backgroundSize = '200% 4000%';
  $body.style.animation = `background-${direction} 3s linear infinite`;
}

function createBackgroundColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function handleButton(event) {
  const positionX = Math.floor(Math.random() * window.innerWidth);
  const positionY = Math.floor(Math.random() * window.innerHeight);
  $button.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
}

function handleTimer() {
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      $timer.textContent = `Time Remaining: ${timer}`;
    } else {
      clearInterval(timerInterval);
      $modal.classList.toggle('hidden');
      $start.classList.toggle('hidden');
      $end.classList.toggle('hidden');
      $clickTotal.textContent = clicks;
    }
  }, 1000);
}

function countClicks() {
  clicks++;
  $clicks.textContent = `Clicks: ${clicks}`;
}
