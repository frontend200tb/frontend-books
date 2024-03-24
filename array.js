function sortByAsc(arr) {
  const arr1 = arr;
  const len = arr.length;
  let temp;
  for (let i = 0; i < len / 2; i += 1) {
    for (let j = 1; j < len; j += 1) {
      if (arr1[j - 1] > arr1[j]) {
        temp = arr1[j - 1];
        arr1[j - 1] = arr1[j];
        arr1[j] = temp;
      }
      if (arr1[len - j - 1] > arr1[len - j]) {
        temp = arr1[len - j - 1];
        arr1[len - j - 1] = arr1[len - j];
        arr1[len - j] = temp;
      }
    }
  }
  return arr;
}

function shuffleChar(str, iterations) {
  let str1 = str;
  let iter = iterations;
  const len = str.length;
  function run1(str2) {
    let str3 = '';
    for (let i = 0; i < len; i += 2) {
      str3 += str2[i];
    }
    for (let i = 1; i < len; i += 2) {
      str3 += str2[i];
    }
    return str3;
  }

  do {
    str1 = run1(str1);
    iter -= 1;
  } while (iter > 0);
  return str1;
}