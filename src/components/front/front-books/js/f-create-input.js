/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-books.js...
// Code
import dataBooksHtmlcss from './data/data-books-htmlcss';
import dataBooksJs from './data/data-books-js';
import dataBooksTs from './data/data-books-ts';
import dataBooksCsharp from './data/data-books-csharp';
import dataBooksC from './data/data-books-c';
import dataBooksPhp from './data/data-books-php';
import dataBooksPython from './data/data-books-python';
import dataBooksPascal from './data/data-books-pascal';

// Base
import dataBooksBase from './data/data-books-base';
import dataBooksAlgorithm from './data/data-books-algorithm';
import dataBooksComp from './data/data-books-comp';
import dataBooksBios from './data/data-books-bios';
import dataBooksNetworks from './data/data-books-networks';
import dataBooksOpsys from './data/data-books-opsys';
import dataBooksInformatika from './data/data-books-inform';
import dataBooksOop from './data/data-books-oop';
import dataBooksMath from './data/data-books-math';

// Framework
import dataBooksNode from './data/data-books-node';
import dataBooksAngular from './data/data-books-angular';
import dataBooksReact from './data/data-books-react';
import dataBooksVue from './data/data-books-vue';
import dataBooksBootstrap from './data/data-books-bootstrap';
import dataBooksJquery from './data/data-books-jquery';

// CMS
import dataBooksCms from './data/data-books-cms';

// Tools
import dataBooksAjax from './data/data-books-ajax';
import dataBooksDocker from './data/data-books-docker';
import dataBooksGit from './data/data-books-git';
import dataBooksGraphql from './data/data-books-graphql';
import dataBooksRegexp from './data/data-books-regexp';
import dataBooksSql from './data/data-books-sql';

// Theme
import dataBooksWeb from './data/data-books-web';
import dataBooksDevops from './data/data-books-devops';
import dataBooksSysadmin from './data/data-books-sysadmin';
import dataBooksDataScience from './data/data-books-datascience';
import dataBooksDl from './data/data-books-dl';
import dataBooksMl from './data/data-books-ml';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [
  // Code
  dataBooksHtmlcss, dataBooksJs, dataBooksTs, dataBooksCsharp, dataBooksC,
  dataBooksPhp, dataBooksPython, dataBooksPascal,
  // Base
  dataBooksBase, dataBooksAlgorithm, dataBooksComp, dataBooksBios,
  dataBooksOpsys, dataBooksNetworks, dataBooksInformatika, dataBooksOop,
  dataBooksMath,
  // Framework
  dataBooksNode, dataBooksAngular, dataBooksReact, dataBooksVue,
  dataBooksBootstrap, dataBooksJquery,
  // CMS
  dataBooksCms,
  // Tools
  dataBooksAjax, dataBooksDocker, dataBooksGit, dataBooksGraphql, dataBooksRegexp,
  dataBooksSql, 
  // Theme
  dataBooksDataScience, dataBooksDl, dataBooksDevops, dataBooksMl, dataBooksWeb, dataBooksSysadmin];

// 3. Создаем массив с книгами dataBooks из массива dataArray
const dataBooks = [].concat(...dataArray);

export default function createInput() {
  return dataBooks;
}
