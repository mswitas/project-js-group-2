import axios from "axios"
import { loadingInfo } from '../fetch-from-api/loader';


export const fetchCategory = async categoryName => {
    loadingInfo();
    const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${categoryName}`);
    return response;
}