// !!!!
//                          CALLBACK
// !!

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(90);
// };
// const fnB = function (number) {
//   console.log('Это пример Кол-бэка', number);
// };
// fnA('qweqwe', fnB);

// !!!!!!
// !!!!!!

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 4, add);
// doMath(2, 4, sub);

// !!!!!!

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 4, function (x, y) {
//   return x + y;
// });
// doMath(2, 4, function (x, y) {
//   return x - y;
// });

// !!!!!!!
// !!!!!!!!
// !!!!!!!

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('Клик по кнопке' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// !!!!!!
// !!!!!!
// !!!!!
//                 ВЫЗОВ ГЕОЛОКАЦИИ

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );

// !!!!
// !!!!!!

// const callback = function () {
//   console.log('Через 4 секунды,это кол-бэк');
// };

// console.log('в коде перед таймаут');

// setTimeout(callback, 4000);

// console.log('в коде после таймаута');

// !!!!!!
// !!!!!

// const filter = function (array, test) {
//   const filterArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filterArray.push(el);
//     }
//   }

//   return filterArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 5;
// };
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'orange', quantity: 80, isFresh: false },
//   { name: 'lemon', quantity: 220, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// !!!!!!
// !!!!!!
// !!!!!!

//              замыкание

// const fnA = function (parameter) {
//   const innerVariable = 'значение внутринней функции fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('это вызов innerVariable');
//   };
//   return innerFunction;
// };
// const fnB = fnA(333);

// fnB();

// console.log(fnB);

// !!!!
// !!!!

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'Пирожок');
// makeDish('Mango', 'Омлет');
// makeDish('Mango', 'Чай');

// makeDish('Poly', 'Котлеты');
// makeDish('Poly', 'Суп');
// makeDish('Poly', 'Кофе');

// ++++++
// ++++++

//             замыкание

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');
// mango('пирожок');

// !!!!!!!
// !!!!!!!
// 1!!!!!!!

//          округлятор
const floatingPoint = 3.45678;
const someInt = Math.round(floatingPoint);
comst withDecimals

console.log(floatingPoint);
