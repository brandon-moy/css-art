if (typeof window === 'object') {

  const track = document.querySelector('.track');

  const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = e => {
    if (track.dataset.mouseDownAt === '0') return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
      transform: `translateX(${nextPercentage}%)`
    }, { duration: 1200, fill: 'forwards' });
  };

  window.onmousedown = e => handleOnDown(e);

  window.ontouchstart = e => handleOnDown(e.touches[0]);

  window.onmouseup = e => handleOnUp(e);

  window.ontouchend = e => handleOnUp(e.touches[0]);

  window.onmousemove = e => handleOnMove(e);

  window.ontouchmove = e => handleOnMove(e.touches[0]);
}
