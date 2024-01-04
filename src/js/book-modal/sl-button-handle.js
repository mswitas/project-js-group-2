import { addBookIdToShoppingList } from "../shopping-list/add-book-id-to-shopping-list";
import { removeBookIdFromShoppingList } from "../shopping-list/remove-book-id-from-shopping-list";

export const slButtonHandle = event => {
    console.log(event.currentTarget.getAttribute('data-sl'));
    const bookId =  event.currentTarget.getAttribute('id').slice(6);
    if (event.currentTarget.getAttribute('data-sl') === 'add') {
        addBookIdToShoppingList(bookId);
        event.currentTarget.setAttribute('data-sl', 'remove');
        event.currentTarget.innerText = 'remove from the shopping list';
    } else {
        removeBookIdFromShoppingList(bookId);
        event.currentTarget.setAttribute('data-sl', 'add');
        event.currentTarget.innerText = 'add to shopping list';
    }
}