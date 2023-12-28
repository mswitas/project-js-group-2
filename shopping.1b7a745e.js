!function(o){let t=document.querySelector("#SL-list");o.forEach(o=>{t.insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${o.cover}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${o.title}</h3>
                            <p class="SL-book-category">${o.category}</p>
                            <p class="SL-book-description">${o.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${o.author}</p>
                                <div class="SL-d3">
                                    <a href=""><img src="./images/amazon.png" alt="amazon link"></a>
                                    <a href=""><img src="./images/book-orange.png" alt="ksi\u{119}garnia link"></a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button type="button" class="SL-remove">
                            <svg>
                                <use href="./images/icons.svg#icon-trash-03"></use>
                            </svg>
                        </button>
                    </li>`)})}([{title:"Book Title 1",category:"Category 1",description:"Description for Book 1 Description for Book 1 Description for Book 1",author:"Author 1",cover:"https://placehold.jp/100x142.png"},{title:"Book Title 2",category:"Category 2",description:"Description for Book 2 Description for Book 2 Description for Book 2",author:"Author 2",cover:"https://placehold.jp/100x142.png"},{title:"Book Title 3",category:"Category 1",description:"Description for Book 3 Description for Book 3 Description for Book 3",author:"Author 2",cover:"https://placehold.jp/100x142.png"},{title:"Book Title 4",category:"Category 1",description:"Description for Book 4 Description for Book 4 Description for Book 4",author:"Author 3",cover:"https://placehold.jp/100x142.png"}]);
//# sourceMappingURL=shopping.1b7a745e.js.map
