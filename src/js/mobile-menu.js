(() => {
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleBtn = document.getElementById('toggleBtn');
  const body = document.querySelector('body');
  const topbtn = document.querySelector('#up_button')

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('header-menu-open');
    mobileMenu.classList.toggle('header-menu-open');
    toggleBtn.setAttribute('aria-expanded', !isMenuOpen);
    if (isMenuOpen) {
      body.style.overflow = 'auto';
      topbtn.style.display = 'block';
    } else {
      body.style.overflow = 'hidden';
      topbtn.style.display = 'none';;
    }

    const headerOpenSVG = toggleBtn.querySelector('.header-open');
    const headerCloseSVG = toggleBtn.querySelector('.header-close');
    headerOpenSVG.classList.toggle('hidden');
    headerCloseSVG.classList.toggle('hidden');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('header-menu-open');
    body.classList.remove('hidden');
    body.style.overflow = 'auto';
    toggleBtn.setAttribute('aria-expanded', false);

    const headerOpenSVG = toggleBtn.querySelector('.header-open');
    const headerCloseSVG = toggleBtn.querySelector('.header-close');
    headerOpenSVG.classList.add('hidden');
    headerCloseSVG.classList.remove('hidden');
  });
})();
