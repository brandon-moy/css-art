const $sets = document.querySelectorAll('.set');
const $pentagon = document.querySelector('.pentagon');

let position = 1;
const colors = ['var(--yellow)', 'var(--purple)', 'var(--pink)'];
let rotations = -15;

setInterval(() => {
  if (position === 3) {
    position = 0;
  }
  for (let i = 0; i < $sets.length; i++) {
    if (i === position) {
      $sets[i].classList.add('active');
    } else {
      $sets[i].className = 'set';
    }
  }
  rotations = rotations + 72;
  $pentagon.style.fill = colors[position];
  $pentagon.style.transform = `scale(1.5) rotate(${rotations}deg)`;
  position++;
}, 5000);
