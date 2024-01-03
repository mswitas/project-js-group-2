const modalBook = document.querySelector('.modal-book-container-bgc');
const modalOpenBox = document.querySelector('.book-cover-box-overlay');
const modalCloseBtn = document.querySelector('.modal-book-close-btn');
const modalCloseEsc = document.querySelector('body');

let instance = basicLightbox.create(document.querySelector('template'));

modalOpenBox.addEventListener('click', event => {
  event.preventDefault();
  modalBook.style.display = 'block';
});

modalCloseBtn.addEventListener('click', event => {
  event.preventDefault();
  modalBook.style.display = 'none';
});

modalCloseEsc.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalBook.style.display = 'block';
  }
});
