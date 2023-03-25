//
//

//                       Урок Номер 4 Открыт

//
//

// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   const result = a * b;
//   console.log('a * b:', result);
//   console.log('Выполняется функция add');

//   return result;
// };
// add(40, 9);
// add(22, 4);
// add(54, 76);

// !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!

// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//   return 'Hello You';
// };
// console.log('Результат:', fn());

// !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!

// const fnA = function () {
//   console.log('Выполняется функция А');
// };
// const fnB = function () {
//   console.log('Выполняется функция B');
// };
// const fnC = function () {
//   console.log('Выполняется функция C');
// };

// fnA();
// fnB();
// fnC();

// !!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!

const cart = [8, 7, 50, 34, 11, 45, 66, 93];
let total = 0;

for (const value of cart) {
  total += value;
}

console.log('Total:', total);

// !!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!

// const calculateTotalPrice = function (items) {
//   console.log('item внутри функции:', items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([10, 20, 30]));
// console.log(calculateTotalPrice([100, 200, 300]));
// !!!!!!!/
// !!!!!!!
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems([2, 3, 6, 77, 9]);
// logItems(['Poly', 'Ajax', 'Jax', 'Max']);
// logItems(['Наушники', 'Часы', 'Очки']);
// !!!!!!!
// !!!!!!
// !!!!!!
// const logins = ['Naruto', 'Soro', 'Bono'];
// const loginToFind = 'Bono';

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден. `;

// console.log(message);
// !!!!!!!!!
// !!!!!!!!!
// !!!!!!!!!
// const logins = ['Naruto', 'Soro', 'Bono'];
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден. `;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден. `;
// };
// console.log(findLogin(logins, 'Nara'));
// console.log(findLogin(logins, 'Naruto'));
// console.log(findLogin(logins, 'Soro'));
// console.log(findLogin(logins, 'Bono'));
// !!!!!!
// !!!!!!!
// !!!!!!!
// const logins = ['Naruto', 'Soro', 'Bono'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} не найден. `
//     : `Пользователь ${loginToFind} найден. `;
// };

// console.log(findLogin(logins, 'Nara'));
// console.log(findLogin(logins, 'Naruto'));
// console.log(findLogin(logins, 'Soro'));
// console.log(findLogin(logins, 'Bono'));
// !!!!!!
// !!!!!!!
// !!!!!!!!
// const title = 'Top 10 Benefits of React Framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const slugify = function (string) {

// const normalizedTitle = strimg.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// }
// console.log(slugify('Top 10 Benefits of React Framework'));
// console.log(slugify('Lorem ipsum, dolor sit amet .'));
// console.log(slugify('Lorem ipsum, dolor sit amet.'));
// !!!!!
// !!!!!
// !!!!!!
// const slugify = function (string) {
//    return string.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Top 10 Benefits of React Framework'));
// console.log(slugify('Lorem ipsum, dolor sit amet .'));
// console.log(slugify('Lorem ipsum, dolor sit amet.'));
// !!!!!!!
// !!!!!!
// !!!!!!!
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };
// fn(3, 5, 90, 65);
// fn(55, 61, 69);
// fn(11, 43, 61, 23);
// !!!!!
// !!!!!!
// !!!!!
// const fn = function (...args) {
//   console.log(args);
// };
// fn('hello', 1, 2, 3);
// fn('aloha', 4, 5, 6, 7);
// fn('Ой Бой', 8, 9);
// !!!!!
// !!!!!
// !!!!!
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 2, 56, 77, 94));
// console.log(add(12, 21, 62, 7, 34));
// console.log(add(11, 20, 36, 37, 94));
// !!!!!
// !!!!!
// !!!!!
// const filterNumbers = function (array, ...args) {
//   console.log('array', array);
//   console.log('args', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 3, 33, 44, 55));
// console.log(filterNumbers([1, 2, 3, 4], 86, 12, 4, 475));
// console.log(filterNumbers([1, 2, 3, 4], 86, 12, 2, 475));
// console.log(filterNumbers([1, 2, 3, 4], 1, 12, 103, 475));
