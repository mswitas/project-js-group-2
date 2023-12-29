export const getBookMarkup = (coverImg, title, author) => {
    const markup = `
        <div class="book-cover-container">
            <img
                src="${coverImg}"
                alt="Book cover"
                class="book-cover"
            />
            <div class="book-cover-box-overlay">
                <p class="book-cover-text-overlay">quick view</p>
            </div>
            <p class="book-cover-book-title">${title}</p>
            <p>autor: ${author}</p>
        </div>
    `;
    return markup;
}
