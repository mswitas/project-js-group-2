import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";
import { getBookMarkup } from "./get-book-markup";
import { insertCategory } from "./insert-category";

export const insertTopBooks = () => {
    fetchFromApi('top-books')
        .then(response => {
            console.log(response.data);
            const displayElement = document.querySelector('#main_section');
            const pageHeader = '<h1>Best Seller Books</h1>';
            displayElement.insertAdjacentHTML('afterbegin', pageHeader);
            response.data.map((category, index) => {
                let categoryDiv = `
                    <div class="books_row_container">
                        <h2 class="books_row_title">${category.list_name}</h2>
                        <ul class="books_row" id="books_row_${index}"></ul>
                        <button type="button" class="see_more" id="see_more_${index}">See more</button>
                    </div>
                `;
                displayElement.insertAdjacentHTML('beforeend', categoryDiv);
                const bookList = document.querySelector(`#books_row_${index}`);
                let listItems = '';
                category.books.map(book => {
                    listItems += `<li>${getBookMarkup(book.book_image, book.title, book.author)}</li>`;
                });
                bookList.insertAdjacentHTML('afterbegin', listItems);
                const buttonSeeMore = document.querySelector(`#see_more_${index}`);
                buttonSeeMore.addEventListener('click', () => {
                    insertCategory(category.list_name);
                });
            });
        })
        .catch(error => {
            errorHandle(error);
        });
}