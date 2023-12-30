document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('supportukrainebutton');
  const numberedItems = document.querySelectorAll('.numberedItem');

  for (let i = 0; i < numberedItems.length; i++) {
    numberedItems[i].style.display = 'none';
  }
  for (let i = 0; i < 6; i++) {
    numberedItems[i].style.display = 'flex';
  }
  button.addEventListener('click', function () {
    if (numberedItems[0].style.display !== 'none') {
      for (let i = 0; i < 3; i++) {
        numberedItems[i].style.display = 'none';
        numberedItems[i + 6].style.display = 'flex';
      }
      button.querySelector('svg').style.transform = 'rotate(180deg)';
    } else {
      for (let i = 0; i < 6; i++) {
        numberedItems[i].style.display = 'flex';
        numberedItems[i + 6].style.display = 'none';
      }

      button.querySelector('svg').style.transform = '';
    }
    button.classList.toggle('reversed');
  });
});
