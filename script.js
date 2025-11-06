// Плавная прокрутка навигации
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Обработка формы
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      alert('Сообщение успешно отправлено!');
      form.reset();
    } else {
      alert('Ошибка отправки. Попробуйте позже.');
    }
  })
  .catch(() => alert('Ошибка отправки. Попробуйте позже.'));
});
