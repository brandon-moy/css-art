const $light = document.querySelector('.light');
const $sky = document.querySelector('.sky');
const $stars = document.querySelector('.stars');
const $clouds = document.querySelector('.clouds');

$light.addEventListener('click', () => {
  $light.classList.toggle('sun');
  $light.classList.toggle('moon');
  $sky.classList.toggle('day');
  $sky.classList.toggle('night');
  $stars.classList.toggle('opacity0');
  $stars.classList.toggle('opacity1');
  $clouds.classList.toggle('opacity0');
  $clouds.classList.toggle('opacity1');
});

const $plane = document.querySelector('.body');

$plane.addEventListener('click', () => {
  $plane.classList.add('lost-control');
  setTimeout(() => {
    $plane.classList.remove('lost-control');
  }, 2000);
});
