import { fetchTopBooksCovers } from '../fetch-from-api/fetch-top-books-covers';
import { errorHandle } from './error-handle';

export const getTopBookCovers = () => {
  const ulElem = document.querySelector('.header-books-wrapper');

  fetchTopBooksCovers()
    .then(response => {
      const topCovers = response.slice(0, 12);

      topCovers.forEach(book => {
        const liElem = document.createElement('li');
        liElem.classList.add('header-book');
        liElem.innerHTML = `<div class="header-book-inner"></div><img src="${book}" alt="cover"></div>`;
        ulElem.appendChild(liElem);
      });
    })
    .catch(error => {
      errorHandle(error);
    });
};
