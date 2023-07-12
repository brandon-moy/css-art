const paper = document.querySelector('#paper');
const pen = paper.getContext('2d');
const arcs = ['#7E2F80', '#7C3786', '#7A408D', '#784893', '#775099', '#7559A0', '#7361A6', '#7169AC', '#6F72B3', '#6D7AB9', '#6C83C0', '#6A8BC6', '#6893CC', '#669CD3', '#64A4D9', '#62ACDF', '#60B5E6', '#5FBDEC', '#5DC5F2', '#5BCEF9', '#59D6FF'];
const startTime = new Date().getTime();

const draw = () => {
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - startTime) / 1000;

  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const start = {
    x: paper.width * 0.3,
    y: paper.height * 0.5
  };

  const end = {
    x: paper.width * 0.7,
    y: paper.height * 0.5
  };

  const length = end.x - start.x;

  // pen.strokeStyle = 'lightgray';
  pen.lineWidth = 4;

  // pen.beginPath();
  // pen.moveTo(start.x, start.y);
  // pen.lineTo(end.x, end.y);
  // pen.stroke();

  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.5
  };

  const initialArcRadius = length * 0.05;
  const spacing = (length / 2 - initialArcRadius) / arcs.length;

  arcs.forEach((arc, index) => {
    const arcRadius = initialArcRadius + (index * spacing);
    // draw arc
    pen.strokeStyle = arc;
    pen.beginPath();
    pen.arc(center.x, center.y, arcRadius, 0, 2 * Math.PI);
    pen.stroke();

    const fullLoop = 2 * Math.PI;
    const numberOfLoops = 50 - index;
    const velocity = (fullLoop * numberOfLoops) / 900;
    const maxAngle = 2 * Math.PI;
    const distance = Math.PI + (elapsedTime * velocity);
    const modDistance = distance % maxAngle;
    // const adjustedDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

    const x = center.x + arcRadius * Math.cos(modDistance);
    const y = center.y + arcRadius * Math.sin(modDistance);

    // draw circle
    pen.fillStyle = 'white';
    pen.beginPath();
    pen.arc(x, y, length * 0.005, 0, 2 * Math.PI);
    pen.fill();
  });

  requestAnimationFrame(draw);
};

draw();
