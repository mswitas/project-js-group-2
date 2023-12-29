import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";
import { insertCategory } from "./insert-category";

export const insertCategoryList = () => {
    fetchFromApi('category-list')
        .then(response => {
            const categoryList = [];
            response.data.map(value => {
                categoryList.push(value.list_name);
            });
            console.log(categoryList);
            categoryList.sort();
            const elementList = document.querySelector('.bookshelf-categories-list');
            categoryList.map((category, index) => {
                const listItem = `<li class="categories-list"><a href="#" id="category-${index}">${category}</a></li>`;
                elementList.insertAdjacentHTML('beforeend', listItem);
                const link = document.querySelector(`#category-${index}`);
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    insertCategory(category);
                });
            });
        })
        .catch(error => {
            errorHandle(error);
        });
}