import axios from "axios"

export const fetchFromApi = async requestType => {
    let url;
    
    switch (requestType) {
        case 'category-list':
            url = 'https://books-backend.p.goit.global/books/category-list';
            break;
        case 'top-books':
            url = 'https://books-backend.p.goit.global/books/top-books';
            break;
    }

    const response = await axios.get(url);
    return response;
}