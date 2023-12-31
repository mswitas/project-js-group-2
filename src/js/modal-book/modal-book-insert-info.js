import { fetchBookById } from '../fetch-from-api/fetch-book';
import { errorHandle } from '../insert-data/error-handle';

const bookInfoContainer = document.querySelector('.modal-book-book-info');

export const insertBookInfo = bookId => {
  fetchBookById(bookId)
    .then(response => {
      const book = response.data;
      const amazonLink = book.buy_links[0].url;
      const bookstoreLink = book.buy_links[1].url;
      const markupInfo = `<img
            src="${book.book_image}"
            alt="Book cover"
            class="modal-book-book-cover"
          />
          <div class="modal-book-info-descr">
            <p class="modal-book-book-title">${book.title}</p>
            <p class="modal-book-book-author">${book.author}</p>
            <p class="modal-book-book-description">
              ${book.description}
            </p>
            <div class="modal-book-links">
              <a href="" class="modal-book-amazon">${amazonLink} </a>
              <a href="" class="modal-book-bookstore">${bookstoreLink}</a>
            </div>`;
      bookInfoContainer.insertAdjacentHTML('beforeend', markupInfo);
    })
    .catch(error => {
      errorHandle(error);
    });
};
