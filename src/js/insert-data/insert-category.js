import { fetchCategory } from "../fetch-from-api/fetch-category"
import { errorHandle } from "./error-handle";
import { getBookMarkup } from "./get-book-markup";

export const insertCategory = category => {
    fetchCategory(category)
        .then(response => {
            console.log(response.data);
            const displayElement = document.querySelector('#main_section');
            displayElement.innerHTML = `
                <h1>${category}</h1>
                <ul class="books_by_category" id="books_by_category"></ul>
            `;
            const bookList = document.querySelector('#books_by_category');
            let listItems = '';
            response.data.map(book => {
                listItems += `<li>${getBookMarkup(book.book_image, book.title, book.author)}</li>`;
            });
            bookList.insertAdjacentHTML('afterbegin', listItems);
        })
        .catch(error => {
            errorHandle(error);
        });
}