// Снег с параллакс-эффектом
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const snowflakes = [];
const numFlakes = 120;

// Создание снежинок
for(let i = 0; i < numFlakes; i++){
  snowflakes.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
    angle: Math.random() * Math.PI * 2
  });
}

// Рисуем снег
function drawSnow(){
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  snowflakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
  });
  ctx.fill();
  moveSnow();
}

// Движение снежинок
function moveSnow(){
  snowflakes.forEach(f => {
    f.y += f.speed;
    f.x += Math.sin(f.angle) * 0.5;
    f.angle += 0.01;
    if(f.y > height) f.y = 0;
    if(f.x > width) f.x = 0;
  });
}

// Анимация свечей
const overlay = document.querySelector('.overlay');
let flicker = 0;
function candleFlicker(){
  flicker += 0.02;
  const opacity = 0.14 + Math.sin(flicker) * 0.03;
  overlay.style.background = radial-gradient(circle at 50% 20%, rgba(255,215,130,${opacity}), rgba(5,5,0,0.85) 80%);
  requestAnimationFrame(candleFlicker);
}

// Обновление размеров
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Главный цикл
function animate(){
  drawSnow();
  requestAnimationFrame(animate);
}
animate();
candleFlicker();
