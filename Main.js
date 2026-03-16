window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 1800);
});

const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
if (cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }, 80);
  });
}

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  updateScrollAnimations();
});

function toggleNav() {
  const menu = document.getElementById('mobileNav');
  if (!menu) return;
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function updateScrollAnimations() {
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      setTimeout(() => el.classList.add('visible'), i * 60);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => setTimeout(updateScrollAnimations, 100));
window.addEventListener('scroll', updateScrollAnimations);

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const target = parseInt(entry.target.getAttribute('data-count'));
      if (!target) return;
      let current = 0;
      const timer = setInterval(() => {
        current += target / 125;
        if (current >= target) { current = target; clearInterval(timer); }
        entry.target.textContent = Math.floor(current);
      }, 16);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = '✓ Request Sent! We\'ll confirm shortly.';
    btn.style.background = '#2d7a3a';
    btn.disabled = true;
  });
}

window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) heroImg.style.transform = `scale(1) translateY(${window.scrollY * 0.3}px)`;
});
