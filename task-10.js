import users from "./users.js"

//Получить массив всех умений всех пользователей(поле skills),
//при этом не должно быть повторяющихся умений и они должны быть
//отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users.reduce((array, user) => {
    array.push(...user.skills)
    return array
  }, []).filter((elem, index, array) => index === array.indexOf(elem)).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'null