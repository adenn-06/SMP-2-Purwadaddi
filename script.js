const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el) => io.observe(el));
} else {
  // Fallback: reveal everything
  revealElements.forEach((el) => el.classList.add('visible'));
}
