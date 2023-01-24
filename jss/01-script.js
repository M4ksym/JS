// !!!!!!!
// 1!!!!!!!
// !!!!!!!!!

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!!!

//         вызов подтверждения да или нет

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
// 1!!!!!!!

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

// !!!!!!!!!
// 1!!!!!!!!!!
// !!!!!!!!!!

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 220;
//     break;

//   default:
//     console.log('Иди в Жопу ');
// }

// !!!

// !!!

// console.log(price);
// const option = 5;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Вы Можете Забрать Товар из Урны';
//     break;
//   case 2:
//     message = 'Курьер Доставит Вам Товар';
//     break;
//   case 3:
//     message = 'Вам отправят товар почтой через ад';
//     break;
//   default:
//     message = 'Вам перезвонит наш Урод';
// }
// console.log(message);

// 111

// !!!

// let totalSpent = 3250;
// let payment = 437;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнёр,скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 3000) {
//   console.log('Серебряный партёр ,скидка 7%');
//   discount = 0.07;
// } else if (totalSpent >= 3001) {
//   console.log('Золотой партёр ,скидка 12%');
//   discount = 0.12;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потреченого в магазине ${totalSpent} `);

// const bthAdd = document.querySelector('button[data-add]');
// const valueInput = document.querySelector('input[data-value]');

// let total = 0;

// bthAdd.addEventListener('click', () => {
//   console.log('click');

//   const value = Number(valueInput.value);
//   console.log(value);
//   total += value;
//   console.log('total:', total);
//   valueInput.value = '';
// });
