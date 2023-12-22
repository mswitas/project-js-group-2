document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navList = document.querySelector('.header-list');

  hamburgerBtn.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});
