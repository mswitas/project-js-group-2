import Notiflix from "notiflix";

export const errorHandle = error => {
    console.log(error);
    Notiflix.Notify.failure('Ooops something went wrong. Please try to refresh page.');
}