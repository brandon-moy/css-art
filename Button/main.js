const $button = document.querySelector('.follow-me');
const $body = document.querySelector('body');

let lastLevel = 0;
let currentLevel = 1;

$button.addEventListener('click', () => {
  lastLevel = currentLevel;
  currentLevel++;
  $body.className = 'body' + currentLevel;
  $button.classList.remove('button' + lastLevel);
  $button.classList.add('button' + currentLevel);
});

// What should click event do?

// Set last level to the current level
// Increment current level by 1

// Randomize background and randomize button location

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
