import users from "./users.js"

//Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = users => {
  const result = users.filter(user => !user.isActive);
  return result
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]