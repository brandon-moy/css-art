const scene = document.querySelector('.scene');
const fries = document.querySelectorAll('.fry');
const shadow = document.querySelector('.shadow');

scene.addEventListener('click', yeet);

function yeet(event) {
  scene.style.animation = 'yeet 5s ease-in-out 1';
  scene.style.animationFillMode = 'forwards';
  shadow.style.animation = 'yeet-shadow 5s ease-in-out 1';
  shadow.style.animationFillMode = 'forwards';
  for (let i = 0; i < fries.length; i++) {
    fries[i].style.animation = `fall${i + 1} 5s ease-in-out 1`;
    fries[i].style.animationFillMode = 'forwards';
  }
}
