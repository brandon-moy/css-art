const $cube = document.querySelector('.cube');
const $cube2 = document.querySelector('.cube2');
const $start = document.querySelector('.start');
const $stop = document.querySelector('.stop');
const $cubeFaceTop = document.querySelector('.cube-face-top');
const $cubeFaceBottom = document.querySelector('.cube-face-bottom');
const $cubeFaceFront = document.querySelector('.cube-face-front');
const $cubeFaceRight = document.querySelector('.cube-face-right');
const $cubeFaceBack = document.querySelector('.cube-face-back');
const $cubeFaceLeft = document.querySelector('.cube-face-left');
let count = 1;
let intervalId = null;
let borderIntervalId = null;
let position = 0;
const borders = {
  top: ['6px 6px 1px 1px', '1px 6px 6px 1px',
    '1px 1px 6px 6px', '6px 1px 1px 6px'],
  bottom: ['6px 1px 1px 6px', '1px 1px 6px 6px',
    '1px 6px 6px 1px', '6px 6px 1px 1px'],
  left: ['1px 6px 6px 1px', '1px 1px 6px 6px',
    '1px 6px 6px 1px', '1px 1px 6px 6px'],
  right: ['1px 1px 6px 6px', '1px 6px 6px 1px',
    '1px 1px 6px 6px', '1px 6px 6px 1px']
};

function borderSet() {
  borderIntervalId = setInterval(() => {
    position++;
    if (position === 4) position = 0;
    $cubeFaceTop.style.borderWidth = borders.top[position];
    $cubeFaceBottom.style.borderWidth = borders.bottom[position];
    $cubeFaceFront.style.borderWidth = borders.left[position];
    $cubeFaceBack.style.borderWidth = borders.left[position];
    $cubeFaceRight.style.borderWidth = borders.right[position];
    $cubeFaceLeft.style.borderWidth = borders.right[position];
  }, 3000);
}

function rotate() {
  intervalId = setInterval(() => {
    const amount = 45 + (count * 90);
    const cube2amount = (count * 180);
    $cube.style.transform = 'translateZ(-100px) rotateX(-45deg) rotateY(' + amount + 'deg)';
    $cube2.style.transform = 'rotateY(-' + cube2amount + 'deg)';
    count++;
  }, 3000);
}

$stop.addEventListener('click', () => {
  clearInterval(intervalId);
  clearInterval(borderIntervalId);
  intervalId = null;
  borderIntervalId = null;
});

$start.addEventListener('click', rotate);

rotate();
borderSet();
