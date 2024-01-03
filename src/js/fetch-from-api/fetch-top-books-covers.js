import axios from "axios";

export const fetchTopBooksCovers = async () => {
    const response = await axios('https://books-backend.p.goit.global/books/top-books');
    const allBooks = response.data.flatMap(value => {
        return value.books;
    });
    const allCovers = allBooks.map(book => {
        return book.book_image;
    });
    return allCovers;
}