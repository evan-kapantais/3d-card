let target = document.querySelector('.target');
let paragraph = document.querySelector('p');

window.addEventListener('mousemove', showCoords);

function showCoords(event) {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let coordX = scale(event.clientX, 0, winWidth, 0, 1);
  let coordY = scale(event.clientY, 0, winHeight, 0, 1);

  paragraph.innerHTML = coordX + " - " + coordY + " -- " + 
  winWidth + " - " + winHeight;

  target.style.transform = `rotat3d(0, 1, 0, ${coordX}deg)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / 
  (in_max - in_min) + out_min;
}