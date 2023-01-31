// const track = document.querySelector('.track');

// const handleOnDown = e => {
//   track.dataset.mouseDownAt = e.clientX;
// };

// const handleOnUp = () => {
//   track.dataset.mouseDownAt = '0';
//   track.dataset.prevPercentage = track.dataset.percentage;
// };

// const handleOnMove = e => {
//   if (track.dataset.mouseDownAt === '0') return;

//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//   const maxDelta = window.innerWidth / 2;

//   const percentage = (mouseDelta / maxDelta) * -100;
//   const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
//   const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//   track.dataset.percentage = nextPercentage;

//   track.animate({
//     transform: `translateX(${nextPercentage}%)`
//   }, { duration: 1200, fill: 'forwards' });
// };

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
// eslint-disable-next-line
let currentSlide = 1;

// Javascript for image slider manual navigation
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
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
const repeat = function (activeClass) {
  const active = document.getElementsByClassName('active');
  let i = 1;

  const repeater = () => {
    setTimeout(function () {
      [...active].forEach(activeSlide => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length === i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();
