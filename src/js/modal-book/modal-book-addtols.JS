import { load, save } from '../shopping-list/storage';
import { addBookIdToShoppingList } from '../shopping-list/add-book-id-to-shopping-list';

const addToListBtn = document.querySelector('.modal-book-addtolist-btn');
const modalBookContainer = document.querySelector('.modal-book-container-bgc');

addToListBtn.addEventListener('click', e => {
  e.preventDefault();
  addBookIdToShoppingList(this.bookId);
  const note = document.createElement('p');
  note.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  note.classList.add('modal-book-note');
  modalBookContainer.style.height = '806px';
  addToListBtn.style.margin = '44px 62px 8px 62px';
  modalBookContainer.append(note);
});
