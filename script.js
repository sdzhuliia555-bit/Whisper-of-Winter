// Простая анимация лёгкого движения животных при скролле
document.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".gallery img");
  const scrollY = window.scrollY;
  images.forEach((img, index) => {
    const speed = (index + 1) * 0.2;
    img.style.transform = translateY(${scrollY * speed * 0.05}px);
  });
});
