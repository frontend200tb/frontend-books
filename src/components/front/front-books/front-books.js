/** **************
Скрипт из файла front-books.js
Функция showFrontBooks показывает страницу front-books
****************** */
/*
Алгоритм работы
1. Создаем объект frontBooks
2. В объекте frontBooks создаем свойство input
3. В объекте frontBooks создаем свойство category
4. В объекте frontBooks создаем свойство elements
5. В объекте frontBooks создаем свойство mainNav
6. В объекте frontBooks создаем свойство elemSection
7. Экспортируем функцию showFrontBooks()
*/

import './element-front-books';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект frontBooks
const frontBooks = {};

// 2. В объекте frontBooks создаем свойство input
frontBooks.input = createInput();

// 3. В объекте frontBooks создаем свойство category
frontBooks.category = createCategory(frontBooks.input);

// 4. В объекте frontBooks создаем свойство elements
frontBooks.elements = createElements(frontBooks.category);

// 5. В объекте frontBooks создаем свойство mainNav
frontBooks.mainNav = createElemMainNav(frontBooks.elements);

// 6. В объекте frontBooks создаем свойство elementSection
frontBooks.elemSection = createElemSection(frontBooks.elements);

// 7. Экспортируем функцию showFrontBooks()
export default function showFrontBooks() {
  const elementFrontBooks = document.querySelector('.front-books');
  if (elementFrontBooks) {
    elementFrontBooks.append(frontBooks.mainNav);
    elementFrontBooks.append(frontBooks.elemSection);
  }
}
