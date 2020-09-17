import users from "./users.js"

//Напиши функции которые с помощью перебирающих методов массива
//(никаких for, splice и т.д.) выполняют следующие операции
//над массивом объектов пользователей из файла users.js.

//  Задание 1
//Получить массив имен всех пользователей(поле name).



const getUserNames = user => {
  const resolt = users.map(user => user.name);
  return resolt;
}

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]