const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');

let lastLevel = 0;
let currentLevel = 1;

$button.addEventListener('click', () => {
  lastLevel = currentLevel;
  currentLevel++;
  $body.className = 'body' + currentLevel;
  $button.classList.remove('button' + lastLevel);
  $button.classList.add('button' + currentLevel);
});
