var e=globalThis,o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,r.call(s.exports,s,s.exports),s.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r),r.register;const s=(e,o)=>{try{let t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},l=e=>{try{let o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}},a=()=>{let e=l("shopping-list");return void 0===e?[]:e};var c=r("8K4Co");const i=e=>{let o=a();if(o.includes(e)){let t=o.indexOf(e);o.splice(t,1),s("shopping-list",o)}},n=document.querySelectorAll("SL-remove");console.log(a()),a().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="block",a().forEach(e=>{(0,c.fetchBookById)(e).then(e=>{var o;console.log(e.data),o=e.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${o.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${o.title}</h3>
                            <p class="SL-book-category">${o.list_name}</p>
                            <p class="SL-book-description">${o.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${o.author}</p>
                                <div class="SL-d3">
                                    <a href="${o.amazon_product_url}"><img src="/src/images/amazon.png" alt="amazon link"></a>
                                    <a href="${o.buy_links[2].url}"><img src="/src/images/book-orange.png" alt="ksi\u{119}garnia link"></a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button value='${o._id}' type="button" class="SL-remove">
                            <svg>
                                <use href="/src/images/icons.svg#icon-trash-03"></use>
                            </svg>
                        </button>
                    </li>`)})}),n.forEach(e=>{console.log(e.value),e.addEventListener("click",function(e){i(this.value)})});
//# sourceMappingURL=shopping.f90dfbb0.js.map
