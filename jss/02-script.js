// !!!!!!!!!

//                                 УРОК НОМЕР ДВА ОТКРЫТ

// !!!!!!!!!!!!

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//     price = `4$`;
//     break;
//   case 2:
//     price = `20$`;
//     break;
//   case 3:
//     price = `40$`;
//     break;
//   case 4:
//     price = `220$`;
//     break;

//   default:
//     console.log('Много хочешь ');
// }
// console.log(price);

// +++++++++++++++++++++++++++=

// const stars = 2;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = `4$`;
//     break;

//   case 3:
//   case 4:
//     price = `40$`;
//     break;

//   case 5:
//     price = `220$`;
//     break;

//   default:
//     console.log('Много хочешь ');
// }
// console.log(price);

// !!!!!!!!!!!!
// !!!!!!!!!!!!!

// const option = 4;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Вы Можете Забрать Товар из Урны';
//     break;
//   case 2:
//     message = 'Черт Доставит Вам Товар';
//     break;
//   case 3:
//     message = 'Вам отправят товар Укр Почтой';
//     break;
//   default:
//     message = 'Вам перезвонит наш Урод';
// }
// console.log(message);

// !!!!!!!!!!!
// !!!!!!!!!!!!
// !!!!!!!!!!!!!!!

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

// !!!!!!!!!
// !!!!!!!!
