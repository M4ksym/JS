// !!!!!!!!!

//                                 УРОК НОМЕР ДВА ОТКРЫТ

// !!!!!!!!!!!!

// let stars = Number(prompt('Введи число звезд до 4'));
// let price;

// switch (stars) {
//   case 1:
//     alert(`4$`);
//     break;
//   case 2:
//     alert(`20$`);
//     break;
//   case 3:
//     alert(`80$`);
//     break;
//   case 4:
//     alert(`250$`);
//     break;

//   default:
//     console.log(prompt('Увы Нет Такого Количества Звезд Нет'));
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

const option = 2;
let message = '';

switch (option) {
  case 1:
    message = 'Вы Можете Забрать Товар из Урны';
    break;

  case 2:
    message = 'Чёрт Доставит Вам Товар';
    break;
  case 3:
    message = 'Вам отправят товар Укр Почтой';
    break;

  default:
    message = 'Вам перезвонит наш Урод';
}
console.log(message);

// !!!!!!!!!!!
// !!!!!!!!!!!!               ЦЫКЛЫ

// for (let i = 0; i <= 7; i += 1) {
//   console.log(i);
// }

// !!!!!!!!!!!!
// 1!!!!!!!!!!!

// const employees = 7;
// const maxSalary = 1200;
// const minSalary = 100;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   totalSalary += salary;
// }
// console.log(totalSalary);

// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!

// const min = 4;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);

//   if (i % 2 === 0) {
//     console.log(`четное: `, i);
//   }
//   total += i;
// }
// console.log('total :', total);

// !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!

// let balance = 1000;
// const payment = 200;

// console.log(`Общая сумма заказа ${payment}, баланс на счету`);

// if (balance >= payment) {
//   console.log(`ок =)`);

//   balance -= payment;

//   console.log(`На вашем счету осталось после покупки ${balance} кредитов`);
// } else {
//   console.log('У вас не хватает кредитов =(');
// }

// !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!

// let totalSpent = 3000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнёр,скидка 4%');
//   discount = 0.04;
// } else if (totalSpent >= 1000 && totalSpent < 3000) {
//   console.log('Серебряный партёр ,скидка 10%');
//   discount = 0.1;
// } else if (totalSpent >= 3000) {
//   console.log('Золотой партёр ,скидка 15%');
//   discount = 0.15;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потреченого в магазине ${totalSpent} `);

// 1!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!

//                      калькулятор из html

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

// !!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!
