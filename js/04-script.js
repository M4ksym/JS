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

const fnA = function () {
  console.log('Выполняется функция А');
};
const fnB = function () {
  console.log('Выполняется функция B');
};
const fnC = function () {
  console.log('Выполняется функция C');
};

fnA();
fnB();
fnC();

// !!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!

// const cart = [8, 7, 50, 34, 11, 45, 66, 93];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

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

// !!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems([2, 3, 6, 77, 9]);
// logItems(['Poly', 'Ajax', 'Jax', 'Max']);
// logItems(['Наушники', 'Часы', 'Очки']);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const logins = ['Naruto', 'Soro', 'Bono'];
// const loginToFind = 'Bono';

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден. `;

// console.log(message);

// ++++++++++++++++++++++++++++++++++++++++++++++

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

// ++++++++++++++++++++++++++++++++++++++++++++++++

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

// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!

// const findSmallesNumber = numbers => {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallesNumber([20, 30, 4, 50, 60]));
// console.log(findSmallesNumber([200, 300, 60]));
// console.log(findSmallesNumber([2, 3, 4, 5, -6]));

// !!!!!!!!!!!!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!!!!!!!!

// const changeCase = string => {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLoverCase = letter === letter.toLowerCase();

//     invertedString += isInLoverCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('qweEWQ'));
// console.log(changeCase('POIpoi'));
// console.log(changeCase('ZXCzxc'));
// console.log(changeCase('zxcZXC'));

// !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!

// const title = 'Top 10 Benefits of React Framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// console.log(slug);

// ++++++++++++++++++++++++++++++++++++

// const title = 'Top 10 Benefits of React Framework';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const slugify = (string) => {
//   const normalizedTitle = string.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

//   return slug;
// };
// console.log(slugify('Top 10 Benefits of React Framework'));
// console.log(slugify('Lorem ipsum, dolor sit aet .'));
// console.log(slugify('Lorem ipsum, dolor sit aet.'));

// ++++++++++++++++++++++++++++++++++

// const slugify = string => {
//   return string.toLowerCase().split(' ').join('-');
// };
// console.log(slugify('Top 10 Benefits of React Framework'));
// console.log(slugify('Lorem ipsum, dolor sit aet .'));
// console.log(slugify('Lorem ipsum, dolor sit aet.'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//                            Array  &  Array.from   &  args

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };
// fn(3, 5, 90, 65);
// fn(55, 61, 69);
// fn(11, 43, 61, 23);

// ++++++++++++++++++++++++++++++  операция rest=(...args)

// const fn = (...args) => {
//   console.log(args);
// };
// fn('hello', 1, 2, 3, 4, 5, 6, 7);
// fn('aloha', 4, 5, 6, 7);
// fn('Ой Бой', 8, 9);

// ++++++++++++++++++++++++++++++++++++++++

// const fn = (a, b, c, ...args) => {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };
// fn('hello', 1, 2, 3, 4, 5, 6, 7);
// fn('aloha', 4, 5, 6, 7);
// fn('Ой Бой', 8, 9);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

//                             плюсуем аргументы

// const add = (...args) => {
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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const filterNumbers = (array, ...args) => {
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

// console.log(filterNumbers([1, 2, 3, 4, 5], 3, 33, 44, 1, 55));
// console.log(filterNumbers([1, 2, 3, 4], 86, 12, 3, 4, 475));
// console.log(filterNumbers([1, 2, 3, 4], 86, 12, 2, 3, 475));
// console.log(filterNumbers([1, 2, 3, 4], 1, 12, 103, 475));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
