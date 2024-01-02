var e=globalThis,t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r.register;const s=(e,t)=>{try{let o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},l=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},a=()=>{let e=l("shopping-list");return void 0===e?[]:e};var c=r("8K4Co");const n=e=>{let t=a();if(t.includes(e)){let o=t.indexOf(e);t.splice(o,1),s("shopping-list",t)}};document.querySelectorAll("SL-remove");const i=document.querySelector("#SL-list");console.log(a()),a().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="block",a().forEach(e=>{(0,c.fetchBookById)(e).then(e=>{var t;console.log(e.data),t=e.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${t.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${t.title}</h3>
                            <p class="SL-book-category">${t.list_name}</p>
                            <p class="SL-book-description">${t.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${t.author}</p>
                                <div class="SL-d3">
                                    <a href="${t.amazon_product_url}"><img src="/src/images/amazon.png" alt="amazon link"></a>
                                    <a href="${t.buy_links[2].url}"><img src="/src/images/book-orange.png" alt="ksi\u{119}garnia link"></a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button value='${t._id}' type="button" class="SL-remove">
                            <svg>
                                <use href="/src/images/icons.svg#icon-trash-03"></use>
                            </svg>
                        </button>
                    </li>`)})}),i.addEventListener("click",function(e){e.target.classList.contains("SL-remove")&&(console.log(e.target.value),n(e.target.value),location.reload())});
//# sourceMappingURL=shopping.4c704b7b.js.map
