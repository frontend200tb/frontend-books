/** ***************
Функция createList возвращает список элементов li с книгами для элемента aside меню
**************** */
/*
Алгоритм работы
1. Функция createList принимает массив книг по одной теме
2. Отсортируем книги по году, автору и названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка книг
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

import sortBooks from './sort-books';

// 1. Функция createList принимает массив книг по одной теме
export default function createList(data) {
  // 2. Отсортируем книги по году, автору и названию
  data = sortBooks(data);

  // 3. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // 4. Создадим элемент elementLi списка книг
    const elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);

    elementLi.innerHTML = `
    <strong>[${data[i].year}] ${data[i].title}</strong>
    <div><em>${data[i].authorName ? data[i].authorName + ' ' : ''}${data[i].author}</em></div>
    <div>${data[i].pages} стр</div>
    <div>Изучено ${data[i].isLearned}</div>
    <div>${origin(data[i])}</div>`;

    // 5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);

    function origin(book) {
      if (book.origin) {
        return `(
        <strong>${book.origin.title}</strong>
        - <em>${book.origin.author}</em>
        )`;
      }
      return '';
    }

    function addColor() {
      elementLi.classList.add('over');
    }

    function removeColor() {
      elementLi.classList.remove('over');
    }
  }

  return parentDiv;
}
