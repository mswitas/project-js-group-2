(() => {
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleBtn = document.getElementById('toggleBtn');
  const closeBtn = document.getElementById('closeBtn');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('header-menu-open');
    mobileMenu.classList.toggle('header-menu-open');
    toggleBtn.setAttribute('aria-expanded', !isMenuOpen);

    if (isMenuOpen) {
      toggleBtn.innerHTML =
        '<svg width="28px" height="28px"><use href="//src/images/icons.svg#icon-align-left"></use></svg>';
    } else {
      toggleBtn.innerHTML =
        '<svg width="28px" height="28px"><use href="/src/images/icons.svg#icon-x-close"></use></svg>';
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);
  // closeBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('header-menu-open');
    toggleBtn.setAttribute('aria-expanded', false);
  });
})();
