//                                    УРОК НОМЕР ОДИН ОТКРЫТ

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

// console.log(5 * 5.1348);

// !!!!!!!!
// !!!!!!!!

// const type = typeof true;

// console.log(type);

// !!!!!!!!
// !!!!!!!!
//               ALERT

// alert('НЕ забываем про alert');

//              ALERT

// !!!!!!
// !!!!!!

//               confirm

// const shouldRenew = confirm('Хотите Продлить Подписку ?');
// console.log(shouldRenew);

//               confirm

// !!!!!!!!
// !!!!!!!!!

//               prompt

// let quantity = prompt('Введите кол-во товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// ++++++++++++

// const quantity = prompt('Введите кол-во товара');
// console.log(quantity);

// +++++++++++++

// let quantity = prompt('Введите кол-во товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//               prompt

// 1!!!!!!!!!!
// !!!!!!!!!!!

//               number

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(result);

// let elementHeight = '200.533px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// ++++++++++++++

// const salary = 1455.9382;

// console.log(salary);
// console.log(salary.toFixed());

// let salary = 1455.9382;

// salary = Number(salary.toFixed(4));
// console.log(salary);

//               number

// !!!!!!!!!
// !!!!!!!!!

//             приведение к числу

// let quantity = '4';
// console.log(Number(quantity));

// !!!!!!!!!!!
// !!!!!!!!!!

//           Math

// !!!!!!!!!

// console.log(Math.PI);

// !!!!!!!!!!

// const max = 80;
// const min = 20;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// !!!!!!!!!!!!

// const base = 2;
// const power = 9;

// const result = Math.pow(base, power);

// console.log(result);

// !!!!!!!!!!!!!!!!!!!

// // Math.floor(num) - повертає найбільше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

//           Math

// 1!!!!!!!!!!!
// !!!!!!!!!!!
// !!!!!!!!!!!

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = 'JavaScript is awesome!';
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!!!

//               вызов подтверждения да или нет

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// !!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!

//               вызов модального окна с подтверждением

// const value = prompt('Please enter a number!');
// console.log(typeof value); // "string"
// console.log(value); // "5"

//              вызов модального окна с подтверждением

// !!!!!!!!
// !!!!!!!!

//             метот length-длинна строки

// const message = 'В этой строке очень много символов ?';
// console.log(message.length);

//             метот length-длинна строки

// !!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!

//              toLowerCase

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// ++++++++++

// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);

// +++++++++++++      toUpperCase

// let brand = 'Samsung';
// brand = brand.toUpperCase();
// console.log(brand);

// +++++++++++++      toUpperCase

//                  toLowerCase

// 1!!!!!!!
// !!!!!!!!!!!
// !!!!!!!!!!!

//          операторы равенства и не равенства

// ===  !==

//            операторы и,или

//    and &&    or ||     not !

//                  && и

// const x1 = 5;
// const x2 = 15;
// const number = 9;

// console.log(number === x1 && number === x2);

// console.log(`Число ${number} больше  ${x1}? `, number > x1);
// console.log(`Число ${number} меньше ${x1}? `, number < x1);
// console.log(`Число ${number} больше  ${x1}? `, number > x2);
// console.log(`Число ${number} меньше ${x1}? `, number < x2);

// +++++++++++++++

//                  или ||
// const x1 = 5;
// const x2 = 15;
// const number = 9;

// console.log(number > x1 || number < x2);

// !!!!!!!!
// !!!!!!!!!

// const balance = 1000;
// let message;

// if (balance > 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }
// console.log(message);

// !!!!!!!!!!!!!!
// !!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!

//                           ТЕРНАРНЫЙ ОПЕРАТОР  ? :

// const balance = 1000;

// let message = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

//                          ТЕРНАРНЫЙ ОПЕРАТОР

// console.log(11 > 10);
