const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
const active = document.getElementsByClassName('active');
let currentSlide = 1;
let intervalId = null;

const manualNav = function (manual) {
  slides.forEach(slide => {
    slide.classList.remove('active');

    btns.forEach(btn => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    manualNav(i);
    currentSlide = i;
    repeat();
  });
});

const repeat = () => {

  intervalId = setInterval(() => {
    [...active].forEach(activeSlide => {
      activeSlide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');
    btns[currentSlide].classList.add('active');
    currentSlide++;

    if (slides.length === currentSlide) {
      currentSlide = 0;
    }
  }, 2000);
};

repeat();
