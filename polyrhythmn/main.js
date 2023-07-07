const paper = document.querySelector('#paper');
const pen = paper.getContext('2d');

const draw = () => {
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9
  };

  const end = {
    x: paper.width * 0.9,
    y: paper
  };

  const length = end.x - start.x;

  pen.strokeStyle = 'white';
  pen.lineWidth = 6;

  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();

  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.9
  };

  // draw arc
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
  pen.stroke();

  const arcRadius = length * 0.05;
  const angle = Math.PI;

  const x = center.x + arcRadius * Math.cos(angle);
  const y = center.y + arcRadius * Math.sin(angle);

  // draw circle
  pen.fillStyle = 'white';
  pen.beginPath();
  pen.arc(x, y, length * 0.01, 0, 2 * Math.PI);
  pen.fill();

};

draw();
