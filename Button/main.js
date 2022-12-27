const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');

const directions = ['top', 'bottom', 'left', 'right'];

$button.addEventListener('click', () => {
  handleBackground();
  handleButton();
});

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// What should click event do?
// Set last level to the current level
// Increment current level by 1

// Randomize background and randomize button location

function handleBackground(event) {
  const color1 = createBackgroundColor();
  const color2 = createBackgroundColor();
  const color3 = createBackgroundColor();
  const direction = directions[Math.floor(Math.random() * directions.length)];
  $body.style.background = `linear-gradient(to ${direction}, ${color1}, ${color2}, ${color3}, ${color1})`;
  $body.style.backgroundSize = '200% 4000%';
  $body.style.animation = `background-${direction} 3s linear infinite`;
}

function createBackgroundColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
// for background:
// Option A: create background color variables
// create an array containing the variables
// randomly pull colors from the array and set them as a linear gradient
// create an array containing directions
// randomly pull a direction for the gradient to move towards

// Option B: use Math.random to give a number;
// multiple that number by 255
// take the floor of that number
// do this 3 times to give us an rgb value

// Then after whichever option, use the style property to update the body element

// for Button
// take max width and height of screen?
// then take Math.random and multiple by the width and height of the screen
// move the button to that position in pixels?

function handleButton(event) {
  const positionX = Math.floor(Math.random() * window.innerWidth);
  const positionY = Math.floor(Math.random() * window.innerHeight);
  $button.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
}
