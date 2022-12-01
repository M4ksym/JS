// const stars = 0;
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

let totalSpent = 0;
let payment = 450;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнёр,скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 3000) {
  console.log('Серебряный партёр ,скидка 7%');
  discount = 0.07;
} else if (totalSpent >= 3001) {
  console.log('Золотой партёр ,скидка 10%');
  discount = 0.1;
} else {
  console.log('Не партнёр, скидка 0%');
}

payment = payment - payment * discount;

console.log(
  'Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%',
);

totalSpent += payment;

console.log('Общая сумма потреченого в магазине ${totalSpent} ');
