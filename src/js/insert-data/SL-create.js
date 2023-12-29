export function createBook(data) {
  const shoppingListUl = document.querySelector('#SL-list');
  data.forEach(book => {
    shoppingListUl.insertAdjacentHTML(
      'beforeend',
      ` <li class="SL-book">
                        <img src="${book.cover}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${book.title}</h3>
                            <p class="SL-book-category">${book.category}</p>
                            <p class="SL-book-description">${book.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${book.author}</p>
                                <div class="SL-d3">
                                    <a href=""><img src="./images/amazon.png" alt="amazon link"></a>
                                    <a href=""><img src="./images/book-orange.png" alt="księgarnia link"></a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button type="button" class="SL-remove">
                            <svg>
                                <use href="./images/icons.svg#icon-trash-03"></use>
                            </svg>
                        </button>
                    </li>`,
    );
  });
}
