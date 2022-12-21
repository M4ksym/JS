// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   const result = a * b;
//   console.log('a+b:', result);
//   console.log('Выполняется функция add');
// };
// add(40, 9);
// add(22, 4);
// add(54, 76);
// !!!!
// !!!!
// const fn = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);

//   return 'Fuck you';
// };
// console.log('Результат:', fn());

// !!!!!
// !!!!!
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
// !!!!
// !!!
// !!!!
// const cart = [8, 7, 50, 434, 11, 45, 66, 93];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);
// !!!!!!
// !!!!!!
// !!!!!!
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
const logins = ['Naruto', 'Soro', 'Bono'];
// const loginToFind = 'Bono';

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден. `;

// console.log(message);
const findLogin = function (allLogins, loginToFind) {
  console.log(allLogins);
};
console.log(findLogin(logins, 'Naruto'));
console.log(findLogin(logins, 'Soro'));
console.log(findLogin(logins, 'Bono'));
1.03;
