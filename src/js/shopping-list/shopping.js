import { createBook } from './SL-create';
import { addBookIdToShoppingList } from './add-book-id-to-shopping-list';
import { getShoppingList } from './get-shopping-list';
import { fetchBookById } from '../fetch-from-api/fetch-book';
import { removeBookIdFromShoppingList } from './remove-book-id-from-shopping-list';
import { getTopBookCovers } from '../insert-data/insert-top-book-covers';
getTopBookCovers();

import '../../css/scss/main.scss';
import '../../js/mobile-menu';
import '../../js/theme-switcher';
import '../../js/login-modal';
import '../../js/supportukraine';

const pagesButtons = document.querySelector('#SL-pages');
const listRemove = document.querySelector('#SL-list');
// const buy = document.querySelector('#SL-buy');
// const add = document.querySelector('#SL-add');
// // testowe dodawanie książek
// add.addEventListener('click', function () {
//   addBookIdToShoppingList('643282b1e85766588626a0dc');
//   addBookIdToShoppingList('643282b1e85766588626a0b6');
//   addBookIdToShoppingList('643282b2e85766588626a112');
//   addBookIdToShoppingList('643282b1e85766588626a0b4');
//   addBookIdToShoppingList('643282b1e85766588626a07a');
//   addBookIdToShoppingList('643282b2e85766588626a14a');
//   location.reload();
// });

// // testowe kasowanie książek
// buy.addEventListener('click', function () {
//   getShoppingList().forEach(book => {
//     removeBookIdFromShoppingList(book);
//     location.reload();
//   });
// });

// console.log(getShoppingList());

if (getShoppingList().length > 0) {
  document.getElementById('SL-placeholder').style.display = 'none';
} else {
  document.getElementById('SL-placeholder').style.display = 'flex';
}

if (getShoppingList().length > 4) {
  pagesButtons.style.display = 'flex';
} else {
  pagesButtons.style.display = 'none';
}

getShoppingList().forEach(book => {
  fetchBookById(book).then(response => {
    // console.log(response.data);
    createBook(response.data);
  });
});

listRemove.addEventListener('click', function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('SL-remove') || clickedElement.closest('.SL-remove')) {
    const removeButton = clickedElement.closest('.SL-remove');
    const bookId = removeButton.value;

    removeBookIdFromShoppingList(bookId);
    location.reload();
  }
});
