const overlay = document.querySelector('.overlay');

let flicker = 0;

function candleFlicker() {
  flicker += 0.02;
  const opacity = 0.14 + Math.sin(flicker) * 0.03;
  overlay.style.background = radial-gradient(circle at 50% 20%, rgba(255, 215, 130, ${opacity}), rgba(10, 5, 0, 0.85) 80%);
  requestAnimationFrame(candleFlicker);
}

candleFlicker();
