function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var s=r.register;s("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,a=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),s("9NzsY",function(e,t){e.exports=new URL("book-orange.99f5b86b.png",import.meta.url).toString()}),s("jaNa7",function(e,t){e.exports=new URL("amazon.39a729f8.png",import.meta.url).toString()}),r("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["aJgDI","shopping.2532782d.js","ci8e6","book-orange.99f5b86b.png","i6YUf","amazon.39a729f8.png","f6PIY","trash-03.9b7385f6.svg","hM7te","shopping.f646a47d.css","bKnou","shopping.9e407ae7.js","1EWRR","index.0df2e5e9.js"]'));var n=r("9NzsY"),i=r("jaNa7"),c={};c=new URL("trash-03.9b7385f6.svg",import.meta.url).toString(),r("2cYfo");var l=r("7F3Y9"),d=r("8K4Co"),p=r("3NMec"),f=r("hwpGq");r("kM5jX"),r("7OtgJ"),r("hYLVw"),r("2YDJ9"),(0,f.getTopBookCovers)();const g=document.querySelector("#SL-pages"),u=document.querySelector("#SL-list");(0,l.getShoppingList)().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="flex",(0,l.getShoppingList)().length>4?g.style.display="flex":g.style.display="none",(0,l.getShoppingList)().forEach(t=>{(0,d.fetchBookById)(t).then(t=>{var o;o=t.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${o.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${o.title}</h3>
                            <p class="SL-book-category">${o.list_name}</p>
                            <p class="SL-book-description">${o.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${o.author}</p>
                                <div class="SL-d3">
                                    <a href="${o.amazon_product_url}">
                                        <img class="SL-amazon" src=${e(i)} alt="amazon link">
                                    </a>
                                    <a href="${o.buy_links[2].url}">
                                        <img class="SL-orange" src=${e(n)} alt="ksi\u{119}garnia link">
                                    </a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button value='${o._id}' type="button" class="SL-remove">
                            <img src="${e(c)}" alt="trash can"/>
                        </button>
                    </li>`)})}),u.addEventListener("click",function(e){let t=e.target;if(t.classList.contains("SL-remove")||t.closest(".SL-remove")){let e=t.closest(".SL-remove").value;(0,p.removeBookIdFromShoppingList)(e),location.reload()}});
//# sourceMappingURL=shopping.2532782d.js.map
