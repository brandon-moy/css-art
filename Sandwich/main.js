const $container = document.querySelector('.container');
const $navbar = document.querySelector('.navbar');

let target = null;
let offset = [];
let id = 1;

window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
window.addEventListener('mousemove', move);

$navbar.addEventListener('click', addComponent);
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

function addComponent(e) {
  let component = '';
  if (e.target.tagName === 'BUTTON') {
    component = e.target.getAttribute('data-id');
  } else if (e.target.tagName === 'I') {
    component = e.target.closest('button').getAttribute('data-id');
  } else {
    return;
  }
  $container.appendChild(generateComponent(component));
}

function generateComponent(type) {
  const $img = document.createElement('img');
  $img.className = type;
  $img.setAttribute('src', 'images/' + type + '.png');
  $img.setAttribute('draggable', 'false');
  $img.setAttribute('id', id);
  id++;
  return $img;
}
