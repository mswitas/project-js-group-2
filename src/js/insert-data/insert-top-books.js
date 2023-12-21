import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";

export const insertTopBooks = () => {
    fetchFromApi('top-books')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            errorHandle(error);
        });
}