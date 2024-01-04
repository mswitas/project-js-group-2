export const closeBookModal = () => {
    const bookModal = document.querySelector('.modal-book-container-bgc');
    const bookInfoContainer = document.querySelector('.modal-book-book-info');
    bookModal.style.display = 'none';
    bookInfoContainer.innerHTML = "";
}