const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];
const directions = ['top', 'bottom', 'left', 'right'];

$button.addEventListener('click', () => {
  handleBackground();
});

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// What should click event do?
// Set last level to the current level
// Increment current level by 1

// Randomize background and randomize button location

function handleBackground(event) {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  const color3 = colors[Math.floor(Math.random() * colors.length)];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  $body.style.background = `linear-gradient(to ${direction}, var(--${color1}), var(--${color2}), var(--${color3}), var(--${color1}))`;
  $body.style.backgroundSize = '200%';
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
