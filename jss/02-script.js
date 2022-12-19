// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// const a = [1, 2, 3, 4];
// const b = a;

// console.table(a);
// console.table(b);
// !!!!!!
// !!!!!!
// !!!!!!
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//   console.log(friend);
// }

// const cart = [54, 105, 28, 44, 89, 17, 70, 104];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log('total', total);
// !!!!
// !!!!!!
// !!!!!!!
// const numbers = [1, 2, 6, 4, 7, 90, 11, 54, 31, 77, 12, 84, 80, 7, 99, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
//     console.log('Четное');
//   }
//   total += numbers[i];
// }

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное');
//   }
//   total += number;
// }
// !!!!!!!!!
// !!!!!!!!!
// !!!!!!!!
// const logins = [
//   'Naruto',
//   'Soro',
//   'Jack',
//   'Ludmila',
//   'Doogee',
//   'Ezio',
//   'Thor',
//   'Me',
//   'Bona',
//   'Jack',
//   'Bono',
//   'Poly',
//   'Mango',
// ];
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

// !!

// for (const login of logins) {
//   console.log(`Login:`, login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// !!!
// console.log(logins.includes('Bona'));
// !!!
// !!!
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден. `;

// console.log(message);

// !!!!!!!!!
// !!!!!!!!!
// /!!!!!!!!!!!

const numbers = [43, 50, 33, 69, 2, 11, 9];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (numbers < smallestNumber) {
    smallestNumber = number;
  }
}
console.log('smallestNumber: ', smallestNumber);
