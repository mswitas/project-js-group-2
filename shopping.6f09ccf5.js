function e(e){return e&&e.__esModule?e.default:e}var o=globalThis,t={},a={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){a[e]=o},o.parcelRequired7c6=i);var n=i.register;n("9NzsY",function(e,o){e.exports=new URL("book-orange.99f5b86b.png",import.meta.url).toString()}),n("jaNa7",function(e,o){e.exports=new URL("amazon.39a729f8.png",import.meta.url).toString()}),i("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["aJgDI","shopping.6f09ccf5.js","ci8e6","book-orange.99f5b86b.png","i6YUf","amazon.39a729f8.png","f6PIY","trash-03.9b7385f6.svg","kwas8","shopping.6b8ac2bc.js"]'));var r=i("9NzsY"),s=i("jaNa7"),l={};l=new URL("trash-03.9b7385f6.svg",import.meta.url).toString();var c=i("2cYfo"),d=i("7F3Y9"),p=i("8K4Co"),g=i("3NMec");const S=document.querySelector("#SL-pages"),u=document.querySelector("#SL-list"),L=document.querySelector("#SL-buy");document.querySelector("#SL-add").addEventListener("click",function(){(0,c.addBookIdToShoppingList)("643282b1e85766588626a0dc"),(0,c.addBookIdToShoppingList)("643282b1e85766588626a0b6"),(0,c.addBookIdToShoppingList)("643282b2e85766588626a112"),(0,c.addBookIdToShoppingList)("643282b1e85766588626a0b4"),(0,c.addBookIdToShoppingList)("643282b1e85766588626a07a"),(0,c.addBookIdToShoppingList)("643282b2e85766588626a14a"),location.reload()}),L.addEventListener("click",function(){(0,d.getShoppingList)().forEach(e=>{(0,g.removeBookIdFromShoppingList)(e),location.reload()})}),console.log((0,d.getShoppingList)()),(0,d.getShoppingList)().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="flex",(0,d.getShoppingList)().length>4?S.style.display="flex":S.style.display="none",(0,d.getShoppingList)().forEach(o=>{(0,p.fetchBookById)(o).then(o=>{var t;console.log(o.data),t=o.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${t.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${t.title}</h3>
                            <p class="SL-book-category">${t.list_name}</p>
                            <p class="SL-book-description">${t.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${t.author}</p>
                                <div class="SL-d3">
                                    <a href="${t.amazon_product_url}">
                                        <img class="SL-gray" src=${e(s)} alt="amazon link">
                                    </a>
                                    <a href="${t.buy_links[2].url}">
                                        <img class="SL-gray" src=${e(r)} alt="ksi\u{119}garnia link">
                                    </a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button value='${t._id}' type="button" class="SL-remove">
                            <svg>
                                <use href=${e(l)}></use>
                            </svg>
                        </button>
                    </li>`)})}),u.addEventListener("click",function(e){e.target.classList.contains("SL-remove")&&(console.log(e.target.value),(0,g.removeBookIdFromShoppingList)(e.target.value),location.reload())});
//# sourceMappingURL=shopping.6f09ccf5.js.map
