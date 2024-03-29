// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  input: document.querySelector("input"),
  btmCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divСontrols: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
};

ref.btmCreate.addEventListener("click", (e) => {
  const numberEventredByTheUser = ref.input.value;

  if (numberEventredByTheUser) {
  createBoxes(numberEventredByTheUser);
  }
});

function createBoxes(amount) {
  let size = 30;
  const tagsArr = [];
  for (let i = 0; i < amount; i += 1) {
    const markup = `<div class="square" style="width: ${size}px; height: ${size}px; background:${getRandomHexColor()}"></div>`;
    tagsArr.push(markup);
    size += 10;
  }
  ref.divBoxes.innerHTML = tagsArr.join("");
}

ref.btnDestroy.addEventListener("click", (e) => {
  console.log(ref.input.value);
  if (ref.input.value) {
    destroyBoxes();
  }
});

function destroyBoxes() {
  ref.input.value = 0;
  ref.divBoxes.innerHTML = '';
}