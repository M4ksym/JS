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

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// !!!!!!!
// !!!!!!!
// !!!!!!!

// function isAdult(age) {
//   const passed = age >= 18;
// }

// !!!!!!
// !!!!!!
// 1!!!!!!

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = password === 'jqueryismyjam';

//   return isMatch;
// }

// !!!!!!!
// !!!!!!!
// !!!!!!

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line

//   return message;
// }

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// !!!!!
// !!!!!
// !!!!!

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// !!!!!!!!
// !!!!!!!!!!!!
// !!!!!!

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// !!!!!!!!
// !!!!!!
// !!!!!!!!!!!

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered >= available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// !!!!!!!
// !!!!!!
// !!!!!!!

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// !!!!!!
// !!!!!!!
// !!!!!!!!

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// !!!!!!!
// !!!!!!!!
// !!!!!!!

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = 0.1;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = 0.05;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = 0.02;
//   } else if (totalSpent <= 5000) {
//     discount = 0;
//   }

//   // Change code above this line
//   return discount;
// }

// !!!!!!!
// !!!!!!!!
// !!!!!!!!
