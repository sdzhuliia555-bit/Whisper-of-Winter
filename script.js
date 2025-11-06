document.addEventListener("DOMContentLoaded", () => {
  // === Анимация появления фото при скролле ===
  const images = document.querySelectorAll(".animal-images img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.5 });

  images.forEach(img => observer.observe(img));
});
