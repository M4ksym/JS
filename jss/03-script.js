//                         урок номер три

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// !!!!!!!!!!!!!!!!!!!!
// 1!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!

// const a = [1, 2, 3, 4];
// const b = a;

// console.log(a);
// console.log(b);

// !!!!!!
// !!!!!!
// !!!!!!

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

// console.table(friends);

// ++++++++++++++++++++++++++

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends) {
// }
// console.log(friends);

// !!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!

// const cart = [54, 105, 28, 5, 89, 17, 70, 104, 43, 11, 75, 83, 99];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log('Total:', total);

// ++++++++++++++++++++++++++++++++++++

// const cart = [54, 105, 28, 5, 89, 17, 70, 104, 43, 11, 75, 83, 99];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// !!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!

// const cart = [54, 105, 28, 5, 89, 17, 70, 104, 43, 11, 75, 83, 99, 3];

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// ++++++++++++++++++++++++++++++

// const cart = [54, 105, 28, 5, 89, 17, 70, 104, 43, 11, 75, 83, 99, 3];

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }
// console.log(cart);

// !!!!!!!!!!!!!!!
// !!!!!!1!!!!!!!!!!
// !!!!!!!!!!!!!!!!!

// const numbers = [1, 2, 6, 4, 7, 99, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
//     console.log('Четное');

//     total += numbers[i];
//   }
// }

// console.log('Total:', total);

// +++++++++++++++++++++++++++++++++++++++++++++++++

// const numbers = [1, 2, 6, 4, 7, 99, 14];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное');
//     total += number;
//   }
// }

// console.log('Total:', total);

// !!!!!!!!!
// !!!!!!!!!
// !!!!!!!!

// const logins = ['Bona', 'Jack', 'Bono', 'Poly', 'Mango'];
// const loginToFind = 'Bono';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// console.log(message);

// +++++++++++++++++++++++++++++++++++++++++++

// const logins = [
//   'Bona',
//   'Jack',
//   'Bono',
//   'Poly',
//   'Mango',
// ];
// const loginToFind = 'Bono';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// const logins = [
//   'Bona',
//   'Jack',
//   'Bono',
//   'Poly',
//   'Mango',
// ];
// const loginToFind = 'Bono';

// let message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден. `;

// console.log(message);

// !!!!!!!!!
// !!!!!!!!!
// /!!!!!!!!!!!

// const numbers = [43, 50, 33, 69, 2, 11, 9];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (numbers < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);
// !!!!!
// !!!!!!!
// !!!!!!!!
// !!!!!!!!
// Slice   !!
// const friends = ['Mango', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
// !!!!!
// !!!!!
// Join
// const friends = ['Mango', 'Kiwi', 'Ajax'];
// const string = friends.join(' ');
// console.log(string);

//  !!!!
// !!!!
// !!!!!
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log('invertedString:', invertedString);
// !!!!!
// !!!!!
// 1!!!!!
// const title = 'Top 10 Benefits of React Framework';
// const normalizedTitle = title.toLowerCase();
// const word = normalizedTitle.split(' ');
// const slug = word.join('-');
// console.log(slug);
// !!!!
// !!!!
// const title = 'Top 10 Benefits of React Framework';
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);
// !!!!!
// !!!!!!
// !!!!!!!
// const array1 = [5, 10, 20];
// const array2 = [15, 25, 35];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);
// !!!!!
// !!!!!
// !!!!!!
// !!!!!!
// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];
// console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);
