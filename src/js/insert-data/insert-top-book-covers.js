import { fetchTopBooksCovers } from "../fetch-from-api/fetch-top-books-covers";
import { errorHandle } from "./error-handle";

export const getTopBookCovers = () => {
    fetchTopBooksCovers()
        .then(response => {
            //TODO wstawianie okładek 
            console.log(response);
        })
        .catch(error => {
            errorHandle(error);
        });
}