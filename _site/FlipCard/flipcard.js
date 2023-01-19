
var card = document.querySelector('.card');
card.addEventListener('click', function () {
  if (card.classList.contains('is-flipped')) {
    card.classList.remove('is-flipped');
    card.classList.add('recycled');
  } else {
    card.classList.toggle('is-flipped');
  }
});

// toggle is like if (true) classList.remove() else if (!true) classList.add()
