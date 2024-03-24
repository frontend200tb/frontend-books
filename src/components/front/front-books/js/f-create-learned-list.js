/** ***************
Функция createLearnedList возвращает список элементов li
с прочитанными книгами для элемента Learned меню
**************** */
/*
Алгоритм работы
1. Функция createLearnedList принимает массив прочитанных книг
2. Отсортируем книги по дате прочтения
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка книг
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

// 1. Функция createLearnedList принимает массив прочитанных книг
export default function createLearnedList(data) {
  // 2. Отсортируем книги по дате прочтения
  data.sort((a, b) =>
    // удалить всё, кроме цифр
    a.dateLearned.replace(/[^0-9]/gi, '') - b.dateLearned.replace(/[^0-9]/gi, ''));

  // 3. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // 4. Создадим элемент elementLi списка книг
    const elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);

    elementLi.innerHTML = `
    <span>${data[i].dateLearned}</span>
    <div><strong>[${data[i].year}] ${data[i].title}</strong></div>
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
