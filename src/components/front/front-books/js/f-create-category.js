/** ***************
Функция createCategory принимает массив input, создает и возвращает объект category
**************** */
/*
Алгоритм работы
1. Создаем объект result
2. Проходим по массиву data
  2.1 Если у книги есть категория и этой категории нет в массиве категорий то добавить
  2.2 Если у книги есть тема и этой темы нет в данной категории то добавить
  2.3 Если есть категория и тема то в тему добавить объект с книгой
  2.4 Если книга имеет свойство isLearned === true, то добавляем ее в массив learned
3. Возвращаем объект result
*/

export default function createCategory(data) {
  // 1. Создаем объект result
  const result = {};
  result.result = {};
  result.learned = [];

  // 2. Проходим по массиву data
  data.forEach((elem) => {
    // 2.1 Если у книги есть категория и этой категории нет в массиве категорий то добавить
    if (elem.category && !(elem.category in result.result)) {
      result.result[elem.category] = {};
    }

    // 2.2 Если у книги есть тема и этой темы нет в данной категории то добавить
    if (elem.theme && !(elem.theme in result.result[elem.category])) {
      result.result[elem.category][elem.theme] = [];
    }

    // 2.3 Если есть категория и тема то в тему добавить объект с книгой
    if (elem.category && elem.theme) {
      result.result[elem.category][elem.theme].push(elem);
    }

    // 2.4 Если книга имеет свойство isLearned === true, то добавляем ее в массив learned
    if (elem.isLearned === true) {
      result.learned.push(elem);
    }
  });

  // 3. Возвращаем объект result
  return result;
}
