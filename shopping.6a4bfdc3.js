function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),(0,r.register)("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,a=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)a.set(t[o],{baseUrl:e,path:t[o+1]})}}),r("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["aJgDI","shopping.6a4bfdc3.js","ci8e6","book-orange.99f5b86b.png","i6YUf","amazon.39a729f8.png","f6PIY","trash-03.9b7385f6.svg","8rBr1","shopping.fe1ef4ac.js"]'));var l={};l=new URL("book-orange.99f5b86b.png",import.meta.url).toString();var s={};s=new URL("amazon.39a729f8.png",import.meta.url).toString();var n={};n=new URL("trash-03.9b7385f6.svg",import.meta.url).toString();const i=(e,t)=>{try{let o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},c=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},d=e=>{let t=c("shopping-list");void 0===t?i("shopping-list",[e]):t.includes(e)||(t.push(e),i("shopping-list",t))},g=()=>{let e=c("shopping-list");return void 0===e?[]:e};var u=r("hGVxz");const p=async e=>await (0,u.default).get(`https://books-backend.p.goit.global/books/${e}`),f=e=>{let t=g();if(t.includes(e)){let o=t.indexOf(e);t.splice(o,1),i("shopping-list",t)}},S=document.querySelector("#SL-pages"),b=document.querySelector("#SL-list"),m=document.querySelector("#SL-buy");document.querySelector("#SL-add").addEventListener("click",function(){d("643282b1e85766588626a0dc"),d("643282b1e85766588626a0b6"),d("643282b2e85766588626a112"),d("643282b1e85766588626a0b4"),d("643282b1e85766588626a07a"),d("643282b2e85766588626a14a"),location.reload()}),m.addEventListener("click",function(){g().forEach(e=>{f(e),location.reload()})}),console.log(g()),g().length>0?document.getElementById("SL-placeholder").style.display="none":document.getElementById("SL-placeholder").style.display="flex",g().length>4?S.style.display="flex":S.style.display="none",g().forEach(t=>{p(t).then(t=>{var o;console.log(t.data),o=t.data,document.querySelector("#SL-list").insertAdjacentHTML("beforeend",` <li class="SL-book">
                        <img src="${o.book_image}" alt="placeholder" class="SL-book-cover">
                        <div class="SL-d1">
                            <h3 class="SL-book-title">${o.title}</h3>
                            <p class="SL-book-category">${o.list_name}</p>
                            <p class="SL-book-description">${o.description}</p>
                            <div class="SL-d2">
                                <p class="SL-book-author">${o.author}</p>
                                <div class="SL-d3">
                                    <a href="${o.amazon_product_url}">
                                        <img class="SL-gray" src=${e(s)} alt="amazon link">
                                    </a>
                                    <a href="${o.buy_links[2].url}">
                                        <img class="SL-gray" src=${e(l)} alt="ksi\u{119}garnia link">
                                    </a>
                                </div>
                            </div>
                        </div class="SL-d1">
                        <button value='${o._id}' type="button" class="SL-remove">
                            <svg>
                                <use href=${e(n)}></use>
                            </svg>
                        </button>
                    </li>`)})}),b.addEventListener("click",function(e){e.target.classList.contains("SL-remove")&&(console.log(e.target.value),f(e.target.value),location.reload())});
//# sourceMappingURL=shopping.6a4bfdc3.js.map
