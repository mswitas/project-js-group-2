document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleBtn = document.getElementById('toggleBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');

  toggleBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('header-menu-open');
    const isMenuOpen = mobileMenu.classList.contains('header-menu-open');
    toggleBtn.setAttribute('aria-expanded', String(isMenuOpen));
  });
  closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('header-menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});
