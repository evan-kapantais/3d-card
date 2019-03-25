let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');
let paragraph = document.querySelector('p');

window.addEventListener('mousemove', showCoords);

function showCoords(event) {
  let coordX = event.clientX;
  let coordY = event.clientY;

  // target.style.transform = `rotate3d(${coordY}, ${coordX}, 1, 20deg)`;
  // target.style.transform = `rotate(${coordY / 2}deg, ${coordX / 2}deg)`;

  paragraph.innerHTML = coordX + " - " + coordY;
}