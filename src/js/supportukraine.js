document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('supportukrainebutton');
  const numberedItems = document.querySelectorAll('.numberedItem');

  toggleListVisibility();

  button.addEventListener('click', function () {
    button.classList.toggle('rotated');

    toggleListVisibility();
  });

  function toggleListVisibility() {
    const isVisible = button.classList.contains('rotated');

    for (let i = 0; i < numberedItems.length; i++) {
      numberedItems[i].style.display = isVisible
        ? i >= 0 && i < 6
          ? 'flex'
          : 'none'
        : i >= 3
        ? 'flex'
        : 'none';
    }
  }
});
