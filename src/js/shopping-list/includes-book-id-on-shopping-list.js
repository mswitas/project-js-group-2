import { getShoppingList } from "./get-shopping-list"

export const includesBookIdOnShoppingList = bookId => {
    const shoppingList = getShoppingList();
    if (shoppingList.includes(bookId)) {
        return true;
    } else {
        return false;
    }
}