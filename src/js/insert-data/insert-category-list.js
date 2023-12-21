import { fetchFromApi } from "../fetch-from-api/fetch-from-api"
import { errorHandle } from "./error-handle";

export const insertCategoryList = () => {
    fetchFromApi('category-list')
        .then(response => {
            const categoryList = [];
            response.data.map(value => {
                categoryList.push(value.list_name);
            });
            console.log(categoryList);
        })
        .catch(error => {
            errorHandle(error);
        });
}