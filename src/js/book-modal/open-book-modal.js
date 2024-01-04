import { fetchBookById } from "../fetch-from-api/fetch-book";
import { errorHandle } from "../insert-data/error-handle";
import { includesBookIdOnShoppingList } from "../shopping-list/includes-book-id-on-shopping-list";
import { addBookIdToShoppingList } from "../shopping-list/add-book-id-to-shopping-list";
import { removeBookIdFromShoppingList } from "../shopping-list/remove-book-id-from-shopping-list";
import { closeBookModal } from "./close-book-modal";
import amazonImg from "../../images/amazon.png";
import bookOrange from "../../images/book-orange.png";
import { escKeyClose } from "./esc-key-close";
import { slButtonHandle } from "./sl-button-handle";

export const openBookModal = bookId => {
    const bookInfoContainer = document.querySelector('.modal-book-book-info'); 
    const modalBookContainer = document.querySelector('.modal-book-container');
    fetchBookById(bookId)
        .then(response => {
            const book = response.data;
            const amazonLink = book.buy_links[0].url;
            const bookstoreLink = book.buy_links[1].url;
            const markupInfo = `
                <img
                    src="${book.book_image}"
                    alt="Book cover"
                    class="modal-book-book-cover"
                />
                <div class="modal-book-info-descr">
                    <p class="modal-book-book-title">${book.title}</p>
                    <p class="modal-book-book-author">${book.author}</p>
                    <p class="modal-book-book-description">
                    ${book.description}
                    </p>
                    <div class="modal-book-links">
                    <a href="${amazonLink}" class="modal-book-amazon">  <img src=${amazonImg} alt="Link to amazon"></a>
                    <a href="${bookstoreLink}" class="modal-book-bookstore"><img src=${bookOrange} alt="Link to bookstore"></a>
                    </div>
            `;
            bookInfoContainer.insertAdjacentHTML('beforeend', markupInfo);
            const bookModal = document.querySelector('.modal-book-container-bgc');
            bookModal.style.display = 'block';
            
            const closeButton = document.querySelector('.modal-book-close-icon');    
            closeButton.addEventListener('click', closeBookModal);

            const addBtnMarkup = `<button type="button" class="modal-book-addtolist-btn" id="slBtn-${bookId}" data-sl="add">add to shopping list</button>`;
            const removeBtnMarkup = `<button type="button" class="modal-book-addtolist-btn" id="slBtn-${bookId}" data-sl="remove">remove from the shopping list</button>`;
            const slButtonContainer = document.querySelector('#sl-button-container');
            let slAdd = true;
            

            if (includesBookIdOnShoppingList(bookId)) {
                slButtonContainer.innerHTML = removeBtnMarkup;
            } else {
                slButtonContainer.innerHTML = addBtnMarkup;
            }
            
            const slButton = document.querySelector('.modal-book-addtolist-btn');
            slButton.addEventListener('click', slButtonHandle);

            const modalBg = document.querySelector('.modal-book-container-bgc');
            modalBg.addEventListener('click', (event) => {
                if (modalBg !== event.target) {
                    return;
                }
                closeBookModal();
            });
            document.addEventListener('keydown', escKeyClose);
        })
        .catch(error => {
            errorHandle(error);
        });
}