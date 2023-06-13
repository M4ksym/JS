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
// !!!!!!!!!!

// console.log(Math.PI);

// !!!!!!!!!!
// !!!!!!!!!

// const base = 2;
// const power = 9;

// const result = Math.pow(base, power);

// console.log(result);

// !!!!!!!!!!!!!!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!!!!!!!!!

//                 ЗАДАЧА

// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);

// let result = base ** power;

// console.log(result);

// !!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!
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

// !!!!!!!!!!!!
// !!!!!!!!!!!!!

// const max = 10;
// const min = 0;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// !!!!!!!!!!!
// !!!!!!!!!!!

// console.log(Math.round(2.4));
// console.log(Math.round(2.5));

// !!!!!!!!!!!!!!
// !!!!!!!!!!!!!

//                 задача на изменение цвета фона

// const colors = [
//   'tomato',
//   'teal',
//   'red',
//   'blue',
//   'yellow',
//   'black',
//   'green',
//   'grey',
// ];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!

// const firstName = 'Volks';
// const lastName = 'Golf';
// const fullName = firstName + ' ' + lastName;

// const room = 7;
// const type = 'VIP';

// const welcomeMsg = `Гость ${fullName} поселяется в ${type} номере ${room} `;

// console.log(welcomeMsg);

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

// !!!!!!!!
// !!!!!!!!

//             метот length-длинна строки

// const message = 'В этой строке очень много символов ?';
// console.log(message.length);

// !!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!

//              toLowerCase

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// ++++++++++

// let brand = 'SamSung';
// brand = brand.toLowerCase();
// console.log(brand);

// +++++++++++++      toUpperCase

// let brand = 'Samsung';
// brand = brand.toUpperCase();
// console.log(brand);

// !!!!!!!!!!!
// !!!!!!!!!!!

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет я принц Абдул , это не спам я маджахед ';
// const string2 = 'Самая большая РАСПРОДАЖА лета';
// const string3 = 'Рекламная компания #GoldGym';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!

//          операторы равенства и не равенства

// ===  !==

//            операторы и,или

//    and &&     or ||     not !

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

const balance = 1000;
let message;

if (balance > 0) {
  message = 'Позитивный баланс';
} else {
  message = 'Негативный баланс';
}
console.log(message);

// !!!!!!!!!!!!!!
// !!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!

//                           ТЕРНАРНЫЙ ОПЕРАТОР  ? :

// const balance = 1000;

// let message = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

//                          ТЕРНАРНЫЙ ОПЕРАТОР

// console.log(11 > 10);

// !!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!

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
