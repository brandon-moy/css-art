let target = null;

window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
window.addEventListener('mousemove', move);

function mouseUp() {
  target = null;
}

function mouseDown(e) {
  if (e.target.tagName !== 'path') return;
  target = e.target.closest('svg');
}

function move(e) {
  if (!target) return;
  target.style.top = e.clientY - 80 + 'px';
  target.style.left = e.clientX - 80 + 'px';
}
