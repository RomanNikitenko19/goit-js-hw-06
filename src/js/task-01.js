// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.
{/* <ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>; */}

const listCategories = document.querySelector("#categories");
console.log(`Number of categories: ${listCategories.children.length}`);

const liItemNumberOne = listCategories.firstElementChild;//li
const firstTitle = liItemNumberOne.firstElementChild;//h2
console.log(`Category: ${firstTitle.textContent}`);

const ulFirst = firstTitle.nextElementSibling;//ul
console.log(`Elements: ${ulFirst.children.length}`);

const liItemNumberTwo = liItemNumberOne.nextElementSibling;//li
const secondTitle = liItemNumberTwo.firstElementChild;//h2
console.log(`Category: ${secondTitle.textContent}`);

const ulSecond = secondTitle.nextElementSibling;//ul
console.log(`Elements: ${ulSecond.children.length}`);

const liItemNumberThree = listCategories.lastElementChild;//li
const thirdTitle = liItemNumberThree.firstElementChild;//h2
console.log(`Category: ${thirdTitle.textContent}`);

const ulThird = thirdTitle.nextElementSibling;//ul
console.log(`Elements: ${ulThird.children.length}`);