function e(e){return e&&e.__esModule?e.default:e}var o=globalThis,t={},r={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){r[e]=o},o.parcelRequired7c6=a);var n=a.register;n("ifJdc",function(e,o){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,r=new Map;t=function(e,o){for(var t=0;t<o.length-1;t+=2)r.set(o[t],{baseUrl:e,path:o[t+1]})}}),n("jaNa7",function(e,o){e.exports=new URL("amazon.39a729f8.png",import.meta.url).toString()}),n("9NzsY",function(e,o){e.exports=new URL("book-orange.99f5b86b.png",import.meta.url).toString()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["eFRlh","index.acac1532.js","i6YUf","amazon.39a729f8.png","ci8e6","book-orange.99f5b86b.png","hM7te","shopping.8464ae7a.css","87JeC","shopping.4578e55a.js"]'));var c=a("hGVxz"),s=a("jL4AK");const l=async e=>{let o;switch((0,s.loadingInfo)(),e){case"category-list":o="https://books-backend.p.goit.global/books/category-list";break;case"top-books":o="https://books-backend.p.goit.global/books/top-books"}return await (0,c.default).get(o)};var i=a("5YeQl"),d=a("8K4Co"),i=a("5YeQl"),b=a("7F3Y9");const u=e=>!!(0,b.getShoppingList)().includes(e);a("2cYfo"),a("3NMec");const k=()=>{let e=document.querySelector(".modal-book-container-bgc"),o=document.querySelector(".modal-book-book-info");e.style.display="none",o.innerHTML=""};var g=a("jaNa7"),m=a("9NzsY");const p=e=>{"Escape"===e.key&&(console.log("Esc catched"),k(),document.removeEventListener("keydown",p))};var _=a("2cYfo"),f=a("3NMec");const h=e=>{console.log(e.currentTarget.getAttribute("data-sl"));let o=e.currentTarget.getAttribute("id").slice(6);"add"===e.currentTarget.getAttribute("data-sl")?((0,_.addBookIdToShoppingList)(o),e.currentTarget.setAttribute("data-sl","remove"),e.currentTarget.innerText="remove from the shopping list"):((0,f.removeBookIdFromShoppingList)(o),e.currentTarget.setAttribute("data-sl","add"),e.currentTarget.innerText="add to shopping list")},v=o=>{let t=document.querySelector(".modal-book-book-info");document.querySelector(".modal-book-container"),(0,d.fetchBookById)(o).then(r=>{let a=r.data,n=a.buy_links[0].url,c=a.buy_links[1].url,s=`
                <img
                    src="${a.book_image}"
                    alt="Book cover"
                    class="modal-book-book-cover"
                />
                <div class="modal-book-info-descr">
                    <p class="modal-book-book-title">${a.title}</p>
                    <p class="modal-book-book-author">${a.author}</p>
                    <p class="modal-book-book-description">
                    ${a.description}
                    </p>
                    <div class="modal-book-links">
                    <a href="${n}" class="modal-book-amazon">  <img src=${e(g)} alt="Link to amazon"></a>
                    <a href="${c}" class="modal-book-bookstore"><img src=${e(m)} alt="Link to bookstore"></a>
                    </div>
            `;t.insertAdjacentHTML("beforeend",s),document.querySelector(".modal-book-container-bgc").style.display="block",document.querySelector(".modal-book-close-icon").addEventListener("click",k);let l=`<button type="button" class="modal-book-addtolist-btn" id="slBtn-${o}" data-sl="add">add to shopping list</button>`,i=`<button type="button" class="modal-book-addtolist-btn" id="slBtn-${o}" data-sl="remove">remove from the shopping list</button>`,d=document.querySelector("#sl-button-container");u(o)?d.innerHTML=i:d.innerHTML=l,document.querySelector(".modal-book-addtolist-btn").addEventListener("click",h);let b=document.querySelector(".modal-book-container-bgc");b.addEventListener("click",e=>{b===e.target&&k()}),document.addEventListener("keydown",p)}).catch(e=>{(0,i.errorHandle)(e)})};var c=a("hGVxz"),s=a("jL4AK");const y=async e=>((0,s.loadingInfo)(),await (0,c.default).get(`https://books-backend.p.goit.global/books/category?category=${e}`));var i=a("5YeQl");const S=(e,o,t)=>`
            <div class="book_cover_container">
                <img
                    src="${e}"
                    alt="Book cover"
                    class="book_cover"
                />
                <div class="book_cover_box_overlay">
                    <p class="book_cover_text_overlay">quick view</p>
                </div>
            </div>
            <h3 class="book_cover_book_title">${o}</>
            <h4 class="book_cover_book_subtitle">${t}</h4>  
    `,L=e=>{y(e).then(o=>{console.log(o.data);let t=document.querySelector("#main_section");if(!t){console.error("Main section not found");return}let r=e.split(" "),a=r.length-1,n="";r.forEach((e,o)=>{o===a?n+=`<span class="purple-font">${e}</span>`:n+=`${e} `}),t.innerHTML=`
                <h1>${n}</h1>
                <div class="books_by_category">
                    <ul class="books_category_list" id="books_by_category"></ul>
                </div>
            `;let c=document.querySelector("#books_by_category"),s="";o.data.forEach(e=>{s+=`<li class="book" id="bookId-${e._id}">${S(e.book_image,e.title,e.author)}</li>`}),c.insertAdjacentHTML("afterbegin",s),o.data.forEach(e=>{document.querySelector(`#bookId-${e._id}`).addEventListener("click",()=>{v(e._id)})})}).catch(e=>{(0,i.errorHandle)(e)})};var i=a("5YeQl");const $=()=>{l("top-books").then(e=>{console.log(e.data);let o=document.querySelector("#main_section");if(!o){console.error("Main section not found");return}o.insertAdjacentHTML("afterbegin",'<h1>Best Seller <span class="purple-font">Books</span></h1>'),o.innerHTML="",e.data.forEach((e,t)=>{let r=`
                    <div class="books_row_container">
                        <h2 class="books_row_title">${e.list_name}</h2>
                        <ul class="books_row" id="books_row_${t}"></ul>
                        <button type="button" class="see_more" id="see_more_${t}">See more</button>
                    </div>
                `;o.insertAdjacentHTML("beforeend",r);let a=document.querySelector(`#books_row_${t}`);if(!a){console.error("Book list for category",e.list_name,"not found");return}let n="";e.books.forEach(e=>{n+=`<li class="book" id="bookId-${e._id}">${S(e.book_image,e.title,e.author)}</li>`}),a.insertAdjacentHTML("afterbegin",n),e.books.forEach(e=>{document.querySelector(`#bookId-${e._id}`).addEventListener("click",()=>{v(e._id)})});let c=document.querySelector(`#see_more_${t}`);if(!c){console.error("See more button not found at",t);return}c.addEventListener("click",()=>{L(e.list_name)})})}).catch(e=>{(0,i.errorHandle)(e)})};var H=a("hwpGq");a("kM5jX"),a("7OtgJ"),a("hYLVw"),l("category-list").then(e=>{let o=[];e.data.map(e=>{o.push(e.list_name)}),console.log(o),o.sort();let t=document.querySelector(".bookshelf-categories-list");t.insertAdjacentHTML("afterbegin",'<li class="categories-list"><a href="#" id="all-categories">All Categories</a></li>'),document.querySelector("#all-categories").addEventListener("click",e=>{e.preventDefault(),document.querySelector("#main_section"),$()}),o.map((e,o)=>{let r=`
                <li class="categories-list"><a href="#" id="category-${o}">${e}</a></li>
                `;t.insertAdjacentHTML("beforeend",r),document.querySelector(`#category-${o}`).addEventListener("click",o=>{o.preventDefault(),L(e)})})}).catch(e=>{(0,i.errorHandle)(e)}),$(),(0,H.getTopBookCovers)();
//# sourceMappingURL=index.acac1532.js.map
