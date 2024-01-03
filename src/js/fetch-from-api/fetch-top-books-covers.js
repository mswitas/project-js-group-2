import axios from "axios";

export const fetchTopBooksCovers = async () => {
    const topBookCovers = [];
    const response = await axios('https://books-backend.p.goit.global/books/top-books');
    response.data.map(category => {
        category.books.map(book => {
            topBookCovers.push(book.book_image);
        });
    });
    return topBookCovers;
}