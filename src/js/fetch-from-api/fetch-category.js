import axios from "axios"

export const fetchCategory = async categoryName => {
    const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${categoryName}`);
    return response;
}