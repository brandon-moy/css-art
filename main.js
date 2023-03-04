const $sets = document.querySelectorAll('.set');

let position = 0;

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
  position++;
}, 5000);
