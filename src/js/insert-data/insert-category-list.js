import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";

export const insertCategoryList = () => {
    fetchFromApi('category-list')
        .then(response => {
            const categoryList = [];
            response.data.map(value => {
                categoryList.push(value.list_name);
            });
            console.log(categoryList);
            const elementList = document.querySelector('.bookshelf-categories-list');
            categoryList.map(category => {
                const listItem = `<li class="categories-list">${category}</li>`;
                elementList.insertAdjacentHTML('beforeend', listItem);
            });
        })
        .catch(error => {
            errorHandle(error);
        });
}