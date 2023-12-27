const gallery = document.querySelector('.gallery');

export function createGallery(hits) {
  hits.forEach(hit => {
    gallery.insertAdjacentHTML(
      'beforeend',
      ` <li class="SL-book">
                        <img src="https://placehold.jp/100x142.png" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">tytuł</h3>
                            <p class="SL-book-category">kategoria</p>
                            <p class="SL-book-description"> Lorem ipsum dolor sit amet consectetur adipisicing eli ab
                                enim, numquam fugiat maiores tenetur aliquam rerum vitae placeat minus!</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">autor autor</p>
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
