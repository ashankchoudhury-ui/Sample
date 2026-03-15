window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  const isOpen = menu.style.display === 'flex';
  menu.style.display = isOpen ? 'none' : 'flex';
}

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  document.querySelectorAll('.faq-q').forEach(b => { if (b !== btn) b.classList.remove('open'); });
  document.querySelectorAll('.faq-a').forEach(a => { if (a !== answer) a.classList.remove('open'); });
  btn.classList.toggle('open');
  answer.classList.toggle('open');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = '✓ Request Sent! We\'ll call you shortly.';
    btn.style.background = '#2d7a3a';
    btn.disabled = true;
  });
    }
