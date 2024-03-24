// index.js корневой скрипт

// Стили
import './style.scss';
// Стили

import './components/header/header';
import showFrontBooks from './components/front/front-books/front-books';
import './components/footer/footer';
import './components/btn-up/btn-up';

const main = document.getElementById('main');
main.innerHTML = '<front-books></front-books>';
showFrontBooks();
