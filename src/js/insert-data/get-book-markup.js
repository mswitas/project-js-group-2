export const getBookMarkup = (coverImg, title, author) => {
    const markup = `
       
            <img
                src="${coverImg}"
                alt="Book cover"
                class="book_cover"
            />
            <div class="book_cover_box_overlay">
                <p class="book_cover_text_overlay">quick view</p>
            </div>
            <h3 class="book_cover_book_title">${title}</>
            <h4 class="book_cover_book_subtitle">${author}</h4>
        
    `;
    return markup;
}
