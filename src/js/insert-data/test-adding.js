import { createBook } from './SL-create';

const testBooks = [
  {
    title: 'Book Title 1',
    category: 'Category 1',
    description: 'Description for Book 1 Description for Book 1 Description for Book 1',
    author: 'Author 1',
    cover: 'https://placehold.jp/100x142.png',
  },
  {
    title: 'Book Title 2',
    category: 'Category 2',
    description: 'Description for Book 2 Description for Book 2 Description for Book 2',
    author: 'Author 2',
    cover: 'https://placehold.jp/100x142.png',
  },
  {
    title: 'Book Title 3',
    category: 'Category 1',
    description: 'Description for Book 3 Description for Book 3 Description for Book 3',
    author: 'Author 2',
    cover: 'https://placehold.jp/100x142.png',
  },
  {
    title: 'Book Title 4',
    category: 'Category 1',
    description: 'Description for Book 4 Description for Book 4 Description for Book 4',
    author: 'Author 3',
    cover: 'https://placehold.jp/100x142.png',
  },
];
createBook(testBooks);
