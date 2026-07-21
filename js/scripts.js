const menuButton = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('.mobile-nav');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNavigation.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobileNavigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) setMenu(false);
});

document.getElementById('current-year').textContent = new Date().getFullYear();
