var e=globalThis,t={},o={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,l.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=l),l.register;const s=(e,t)=>{try{let o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},a=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},r=e=>{let t=a("shopping-list");void 0===t?s("shopping-list",[e]):t.includes(e)||(t.push(e),s("shopping-list",t))},n=()=>{let e=a("shopping-list");return void 0===e?[]:e};var i=l("8K4Co");const c=e=>{let t=n();if(t.includes(e)){let o=t.indexOf(e);t.splice(o,1),s("shopping-list",t)}},d=document.querySelector("#SL-pages"),u=document.querySelector("#SL-list"),g=document.querySelector("#SL-buy");document.querySelector("#SL-add").addEventListener("click",function(){r("643282b1e85766588626a0dc"),r("643282b1e85766588626a0b6"),r("643282b2e85766588626a112"),r("643282b1e85766588626a0b4"),r("643282b1e85766588626a07a"),r("643282b2e85766588626a14a"),location.reload()}),g.addEventListener("click",function(){n().forEach(e=>{c(e),location.reload()})}),console.log(n()),n().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="flex",n().length>4?d.style.display="flex":d.style.display="none",n().forEach(e=>{(0,i.fetchBookById)(e).then(e=>{var t;console.log(e.data),t=e.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
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
                    </li>`)})}),u.addEventListener("click",function(e){e.target.classList.contains("SL-remove")&&(console.log(e.target.value),c(e.target.value),location.reload())});
//# sourceMappingURL=shopping.ecc56508.js.map
