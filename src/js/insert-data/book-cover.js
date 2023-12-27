import { fetchBookById } from '../fetch-from-api/fetch-book';
import { errorHandle } from './error-handle';

const bookContainer = document.querySelector('.book-cover-container');

export const insertBook = bookId => {
  fetchBookById(bookId)
    .then(response => {
      const book = JSON.parse(response.data);
      const markup = `<img
        src="${book.book_image}"
        alt="Book cover"
        class="book-cover"
      />
      <div class="book-cover-box-overlay">
        <p class="book-cover-text-overlay">quick view</p>
      </div>
      <p class="book-cover-book-title">${book.title}</p>
      <p class="book-cover-author">${book.author}</p>`;
      bookContainer.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      errorHandle(error);
    });
};
