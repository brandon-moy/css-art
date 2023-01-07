// const $container = document.getElementById('container');

let target = null;
let offset = [];

window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
window.addEventListener('mousemove', move);

function mouseUp() {
  target = null;
  offset = [];
}

function mouseDown(e) {
  if (e.target.tagName !== 'IMG') return;
  target = e.target;
  offset = [e.target.offsetWidth / 2, e.target.offsetHeight / 2];
}

function move(e) {
  if (!target) return;
  target.style.top = e.clientY - offset[1] + 'px';
  target.style.left = e.clientX - offset[0] + 'px';
}
