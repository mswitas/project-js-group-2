import { insertCategoryList } from "./js/insert-data/insert-category-list";
import { insertTopBooks } from "./js/insert-data/insert-top-books";
import { insertCategory } from "./js/insert-data/insert-category";
import { insertBook } from "./js/insert-data/insert-book";
import './css/scss/main.scss'

insertCategoryList();
insertTopBooks();
insertCategory('Young Adult Paperback Monthly');
insertBook('643282b1e85766588626a08b');
