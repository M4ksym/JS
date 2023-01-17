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
//     const passet = test(el);

//     if (passet) {
//       filterArray.push(el);
//     }
//   }

//   return filterArray;
// };

// const callback1 = function (value) {
//   return value <= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
//   return value >= 5;
// });
// console.log(r2);
