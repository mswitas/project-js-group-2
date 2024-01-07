import bookOrange from '../../images/book-orange.png';
import amazon from '../../images/amazon.png';
import trashIcon from '../../images/trash-03.svg';

export function createBook(book) {
  const shoppingListUl = document.querySelector('#SL-list');

  shoppingListUl.insertAdjacentHTML(
    'beforeend',
    ` <li class="SL-book">
                        <img src="${book.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${book.title}</h3>
                            <p class="SL-book-category">${book.list_name}</p>
                            <p class="SL-book-description">${book.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${book.author}</p>
                                <div class="SL-d3">
                                    <a href="${book.amazon_product_url}">
                                        <img class="SL-amazon" src=${amazon} alt="amazon link">
                                    </a>
                                    <a href="${book.buy_links[2].url}">
                                        <img class="SL-orange" src=${bookOrange} alt="księgarnia link">
                                    </a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button data-value='${book._id}' type="button" class="SL-remove">
                            <img src="${trashIcon}" alt="trash can"/>
                        </button>
                    </li>`,
  );
}
