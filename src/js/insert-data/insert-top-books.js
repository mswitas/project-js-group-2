import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";
import { getBookMarkup } from "./get-book-markup";

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
                        <button class="see_more">See more</button>
                    </div>
                `;
                displayElement.insertAdjacentHTML('beforeend', categoryDiv);
                const bookList = document.querySelector(`#books_row_${index}`);
                let listItmes = '';
                category.books.map(book => {
                    listItmes += getBookMarkup(book.book_image, book.title, book.author);
                });
                bookList.insertAdjacentHTML('afterbegin', listItmes);
            });
        })
        .catch(error => {
            errorHandle(error);
        });
}