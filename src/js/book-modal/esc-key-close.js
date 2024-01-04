import { closeBookModal } from "./close-book-modal";

export const escKeyClose = event => {
    if (event.key === 'Escape') {
        console.log('Esc catched');
        closeBookModal();
        document.removeEventListener('keydown', escKeyClose);
    }
}