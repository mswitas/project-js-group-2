import { insertCategoryList } from './js/insert-data/insert-category-list';
import { insertTopBooks } from './js/insert-data/insert-top-books';
import { insertCategory } from './js/insert-data/insert-category';
import { insertBook } from './js/insert-data/insert-book';
import { getTopBookCovers } from './js/insert-data/insert-top-book-covers';
import './css/scss/main.scss';
import './js/mobile-menu';
import './js/theme-switcher';
import './js/login-modal';
import { getTest } from './js/insert-data/insert-test';

insertCategoryList();
insertTopBooks();
getTopBookCovers();
//insertCategory('Young Adult Paperback Monthly');
//insertBook('643282b1e85766588626a08b');
