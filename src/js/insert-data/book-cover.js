import { fetchBookById } from '../fetch-from-api/fetch-book';
import { errorHandle } from './error-handle';

const bookContainer = document.querySelector('.book');

export const insertBookCover = bookId => {
  fetchBookById(bookId)
    .then(response => {
      const book = response.data;
      const markup = `<img
        src="${book.book_image}"
        alt="Book cover"
        class="book_cover"
      />
      <div class="book_cover_box_overlay">
        <p class="book_cover_text_overlay">quick view</p>
      </div>
      <h3 class="book_cover_book_title">${book.title}</h3>
      <p>autor: ${book.author}</p>`;
      bookContainer.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      errorHandle(error);
    });
};
