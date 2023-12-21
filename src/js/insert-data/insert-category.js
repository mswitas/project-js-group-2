import { fetchCategory } from "../fetch-from-api/fetch-category"
import { errorHandle } from "./error-handle";

export const insertCategory = category => {
    fetchCategory(category)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            errorHandle(error);
        });
}