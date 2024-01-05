import axios from "axios"
import { loadingInfo } from '../fetch-from-api/loader';

export const fetchBookById = async bookId => {
    loadingInfo();
    const response = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
    return response;
}