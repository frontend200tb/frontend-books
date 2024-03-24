/** ***************
Функция sortBooks сортирует книги по году, автору и названию
**************** */
export default function sortBooks(books) {
  books.sort((a, b) => {
    if (a.year === b.year) {
      // Если год одинаковый то сортировать по автору
      if (a.author === b.author) {
        // Если автор одинаковый то сортировать по названию
        return a.title.localeCompare(b.title, 'en');
      }
      // Иначе сортировать по автору
      return a.author.localeCompare(b.author, 'en');
    }
    // Иначе сортировать по году
    return a.year - b.year;
  });
  return books;
}

/* localeCompare возвращает
-1 если первая строка должна быть до второй строки
0, если две строки равны
1 если первая строка должна быть после второй строки
*/
