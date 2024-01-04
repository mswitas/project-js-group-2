import { insertCategoryList } from './js/insert-data/insert-category-list';
import { insertTopBooks } from './js/insert-data/insert-top-books';
import { getTopBookCovers } from './js/insert-data/insert-top-book-covers';
import { openBookModal } from './js/book-modal/open-book-modal';
import './css/scss/main.scss';
import './js/mobile-menu';
import './js/theme-switcher';
import './js/login-modal';


insertCategoryList();
insertTopBooks();
getTopBookCovers();
//openBookModal('643282b1e85766588626a080');
//insertCategory('Young Adult Paperback Monthly');
//insertBook('643282b1e85766588626a08b');
