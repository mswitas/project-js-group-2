import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";
import { getBookMarkup } from "./get-book-markup";
import { insertCategory } from "./insert-category";
import { openBookModal } from "../book-modal/open-book-modal";

export const insertTopBooks = () => {
    fetchFromApi('top-books')
        .then(response => {
            // Log fetched data
            console.log(response.data);

            // Find main section and handle null
            const displayElement = document.querySelector('#main_section');
            if (!displayElement) { console.error('Main section not found'); return; }

            // Add page header for Bestseller books and insert it at the beginning
            const pageHeader = '<h1>Best Seller <span class="purple-font">Books</span></h1>';
            displayElement.insertAdjacentHTML('afterbegin', pageHeader);
            displayElement.innerHTML = '';

            // Create rows of 'books'for each category
            response.data.forEach((category, index) => {

                // type Category = {
                //      books: book[],
                //      list_name: string
                // }

                let categoryDiv = `
                    <div class="books_row_container">
                        <h2 class="books_row_title">${category.list_name}</h2>
                        <ul class="books_row" id="books_row_${index}"></ul>
                        <button type="button" class="see_more" id="see_more_${index}">See more</button>
                    </div>
                `;

                // Insert rows of 'books'for each category
                displayElement.insertAdjacentHTML('beforeend', categoryDiv);

                // Extract every row by given index of map function 
                const bookList = document.querySelector(`#books_row_${index}`);

                // Handle bookList null 
                if (!bookList) { console.error('Book list for category', category.list_name, 'not found'); return; }

                // Create empty list of books in a row
                let listItems = '';

                // Create list element for every book in category
                category.books.forEach(book => {
                    listItems += `<li class="book" id="bookId-${book._id}">${getBookMarkup(book.book_image, book.title, book.author)}</li>`;
                });

                // Insert list of books into
                bookList.insertAdjacentHTML('afterbegin', listItems);

                category.books.forEach(book => {
                    const bookElement = document.querySelector(`#bookId-${book._id}`);
                    bookElement.addEventListener('click', () => {
                        openBookModal(book._id);
                    });
                });

                // Find show more button and handle null
                const buttonSeeMore = document.querySelector(`#see_more_${index}`);
                if (!buttonSeeMore) { console.error('See more button not found at', index); return; }

                // Instert specific category of books in main section
                buttonSeeMore.addEventListener('click', () => {
                    insertCategory(category.list_name);
                });


            });
        })
        .catch(error => {
            errorHandle(error);
        });
}