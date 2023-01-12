// let productName = 'Droid';
// productName = 'Repair droid';
// let pricePerItem = 2000;
// pricePerItem = 1500;

// console.log(productName, pricePerItem);

// !!!!!!!!!!!!
// !!!!!!!!!!!
// !!!!!!!!!!!

// const topSpeed = 160;

// const distance = 617.54;

// const login = 'mango935';

// const isOnline = true;
// const isAdmin = false;

// 1!!!!!!!!
// !!!!!!!!!

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// !!!!!!!
// !!!!!!!
// !!!!!!!!

// const productName = 'Droid';
// const pricePerItem = 3500;

// const message = `"You picked Droid, price per item is 3500 credits"`;

// console.log(message);

// !!!!!!!!!
// !!!!!!!!
// !!!!!!!!!

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// !!!!!!!!!!
// !!!!!!!!!!
// !!!!!!!!!

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// !!!!!!!!!!
// !!!!!!!!!
// !!!!!!!!!!

// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!

// 'You picked <product name>, price per item is <product price> credits';

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// !!!!!!!!
// !!!!!!!!
// !!!!!!!

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery ( ${deliveryFee} delivery fee credits) is included in total price.`;
  // Change code above this line
  return message;
}

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

('You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.');
