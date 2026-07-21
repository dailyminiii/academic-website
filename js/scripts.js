const menuButton = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('.mobile-nav');
const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setMenu(open) {
  if (!menuButton || !mobileNavigation) return;
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNavigation.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

if (menuButton && mobileNavigation) {
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
    if (window.innerWidth > 740) setMenu(false);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeColor) themeColor.content = theme === 'dark' ? '#141618' : '#fbfbfa';
  if (themeButton) {
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

if (themeButton) {
  applyTheme(document.documentElement.dataset.theme || 'light');
  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (error) {
      // The selected theme still applies when storage is unavailable.
    }
  });
}

const filterButtons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('[data-publication]');
const noPublications = document.querySelector('.no-publications');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    publications.forEach((publication) => {
      const visible = selectedCategory === 'all' || publication.dataset.category === selectedCategory;
      publication.classList.toggle('is-filtered-out', !visible);
      if (visible) visibleCount += 1;
    });

    if (noPublications) noPublications.hidden = visibleCount !== 0;
  });
});

const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();
