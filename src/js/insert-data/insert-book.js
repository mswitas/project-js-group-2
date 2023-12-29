import { fetchBookById } from "../fetch-from-api/fetch-book"
import { errorHandle } from "./error-handle";

export const insertBook = (bookId, selector) => {
    fetchBookById(bookId)
        .then(response => {
            console.log(response.data);
            
        })
        .catch(error => {
            errorHandle(error);
        });
}