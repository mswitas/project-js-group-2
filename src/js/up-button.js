export function scrollToTop() {
  const upBtn = document.getElementById('up_button');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
      // Możesz zmienić wartość 100 na dowolną wartość scrollowania, przy której ma się pojawić przycisk
      upBtn.classList.add('show');
    } else {
      upBtn.classList.remove('show');
    }
  });

  upBtn.addEventListener('click', e => {
    e.preventDefault;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
