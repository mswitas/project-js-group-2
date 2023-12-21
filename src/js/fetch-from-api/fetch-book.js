import axios from "axios"

export const fetchBookById = async bookId => {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
    return response;
}