// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// 1.Обработка отправки формы form.login-form должна быть по событию submit.
// 2.При отправке формы страница не должна перезагружаться.
// 3.сли в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4.Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//   где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// 5.Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formRef = document.querySelector(".login-form");
const btnRef = document.querySelector('button');
const inputsRef = document.querySelectorAll('input');
const inputEmailRef = inputsRef[0];
const inputPasswordRef = inputsRef[1];

formRef.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("все поля должны быть заполнены");
    return;
  }

  const newUser = {
    email: [email.value],
    password: [password.value],
  };
  console.table(newUser);
  e.currentTarget.reset();
})