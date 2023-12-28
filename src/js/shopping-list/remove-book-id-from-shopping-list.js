import { getShoppingList } from "./get-shopping-list"
import { save } from "./storage";

export const removeBookIdFromShoppingList = bookId => {
    const shoppingList = getShoppingList();
    
    if (shoppingList.includes(bookId)) {
        const bookIndex = shoppingList.indexOf(bookId);
        shoppingList.splice(bookIndex, 1);
        save('shopping-list', shoppingList);
    }

}