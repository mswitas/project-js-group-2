import { createBook } from './SL-create';
import { addBookIdToShoppingList } from './add-book-id-to-shopping-list';
import { getShoppingList } from './get-shopping-list';
import { fetchBookById } from '../fetch-from-api/fetch-book';
import { removeBookIdFromShoppingList } from './remove-book-id-from-shopping-list';

const removeBtn = document.querySelectorAll('SL-remove');

// addBookIdToShoppingList('643282b1e85766588626a0dc');
// addBookIdToShoppingList('643282b1e85766588626a0b6');
console.log(getShoppingList());

// removeBookIdFromShoppingList('643282b1e85766588626a0b6');
// removeBookIdFromShoppingList('643282b1e85766588626a0dc');

// let list = getShoppingList();

if (getShoppingList().length > 0) {
  document.getElementById('SL-placeholder').style.display = 'none';
} else {
  document.getElementById('SL-placeholder').style.display = 'block';
}

getShoppingList().forEach(book => {
  fetchBookById(book).then(response => {
    // Log fetched data
    console.log(response.data);
    createBook(response.data);
  });
});

removeBtn.forEach(btn => {
  console.log(btn.value);
  btn.addEventListener('click', function (event) {
    removeBookIdFromShoppingList(this.value);
  });
});
