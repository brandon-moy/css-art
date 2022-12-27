const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');

const directions = ['top', 'bottom', 'left', 'right'];

$button.addEventListener('click', () => {
  handleBackground();
  handleButton();
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
