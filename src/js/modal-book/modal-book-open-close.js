const modalOpenBox = document.querySelector('.book-cover-box-overlay');
const modalCloseBtn = document.querySelector('.modal-book-close-btn');
const modalCloseEsc = document.querySelector('body');

const instance = basicLightbox.create(document.querySelector('template'));

modalOpenBox.addEventListener('click', event => {
  event.preventDefault();
  instance.show();
});

modalCloseBtn.addEventListener('click', event => {
  event.preventDefault();
  instance.close();
});

modalCloseEsc.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    instance.close();
  }
});
