import { load, save } from "./storage";

export const addBookIdToShoppingList = bookId => {
    const storedShoppingList = load('shopping-list');
    
    if (storedShoppingList === undefined) {
        const shoppingList = [bookId];
        save('shopping-list', shoppingList);
    } else if (!storedShoppingList.includes(bookId)) {
            storedShoppingList.push(bookId);
            save('shopping-list', storedShoppingList);
    }
}