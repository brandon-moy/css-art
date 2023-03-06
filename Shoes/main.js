// const $sets = document.querySelectorAll('.set');
const $pentagon = document.querySelector('.pentagon');
const $prodSlides = document.querySelector('.prod-carousel > .slides');
const $carouselSlides = document.querySelector('.carousel > .slides');

let position = 1;
const colors = ['var(--yellow)', 'var(--purple)', 'var(--pink)'];
let rotations = -15;

function slide() {
  if (position === 0) {
    $prodSlides.scrollLeft -= 800;
    $carouselSlides.scrollLeft -= 1200;
  } else {
    $prodSlides.scrollLeft += 400;
    $carouselSlides.scrollLeft += 600;
  }
}

setInterval(() => {
  if (position === 3) {
    position = 0;
  }
  rotations = rotations + 72;
  slide();
  $pentagon.style.fill = colors[position];
  $pentagon.style.transform = `scale(1.5) rotate(${rotations}deg)`;
  position++;
}, 5000);
