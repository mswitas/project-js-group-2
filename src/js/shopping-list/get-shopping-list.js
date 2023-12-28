import { load } from "./storage"

export const getShoppingList = () => {
    const shoppingList = load('shopping-list');
    return shoppingList === undefined ? [] : shoppingList;
}