import { openBookModal } from "../book-modal/open-book-modal";
import { fetchCategory } from "../fetch-from-api/fetch-category"
import { errorHandle } from "./error-handle";
import { getBookMarkup } from "./get-book-markup";

export const insertCategory = category => {
    fetchCategory(category)
        .then(response => {
            console.log(response.data);
            const displayElement = document.querySelector('#main_section');
            if (!displayElement) { console.error('Main section not found'); return; }
            const categoryArray = category.split(' ');
            const lastWordIndex = categoryArray.length - 1;
            let categoryHeader = '';
            categoryArray.forEach((word, index) => {
                if (index === lastWordIndex) {
                    categoryHeader += `<span class="purple-font">${word}</span>`;
                } else {
                    categoryHeader += `${word} `;
                }
            });
            displayElement.innerHTML = `
                <h1>${categoryHeader}</h1>
                <div class="books_by_category">
                    <ul class="books_category_list" id="books_by_category"></ul>
                </div>
            `;
            const bookList = document.querySelector('#books_by_category');
            let listItems = '';
            response.data.forEach(book => {
                listItems += `<li class="book" id="bookId-${book._id}">${getBookMarkup(book.book_image, book.title, book.author)}</li>`;
            });
            bookList.insertAdjacentHTML('afterbegin', listItems);
            response.data.forEach(book => {
                const bookElement = document.querySelector(`#bookId-${book._id}`);
                bookElement.addEventListener('click', () => {
                    openBookModal(book._id);
                });
            });
        })
        .catch(error => {
            errorHandle(error);
        });
}