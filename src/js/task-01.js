// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const listWithId = document.getElementById("categories");
const listСategories = listWithId.children;

console.log(`Number of categories ${listСategories.length}`);

const listHeadings = document.querySelectorAll("h2");

console.log(`Category: ${listHeadings[0].textContent}`);
const fitstList = listHeadings[0].nextElementSibling.children;
console.log(`Elements: ${fitstList.length}`);

console.log(`Category: ${listHeadings[1].textContent}`);
const secondList = listHeadings[1].nextElementSibling.children;
console.log(`Elements: ${secondList.length}`);

console.log(`Category: ${listHeadings[2].textContent}`);
const thirdList = listHeadings[2].nextElementSibling.children;
console.log(`Elements: ${thirdList.length}`);

