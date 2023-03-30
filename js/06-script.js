//
//                   урок номер 6 , модуль 3
//
//

// !!!!!!!!
// !!!!!!!

//                            SPREAD !!!!! CONCAT

const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9, 0]);
console.log(numbers);

// !!!!!!!!

// const numbers = [5, 6, 7, 8, 12, 13, 14, ...[1, 2, 3, 4]];
// console.log(numbers);

// !!!!!!

// const temps = [10, 23, 35, 40, 59, 61];
// console.log(Math.min(...temps));

// !!!!!!!
// !!!!!!
// !!!!!!

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a:', a);
// console.log('b:', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// !!!!!!!
// 1!!!!!!!!
// !!!!!!!\

// const lastWeekTemp = [-2, -6, -3, -3];
// const currentWeekTemp = [0, 2, 4, 2, 0];
// const nextWeekTemp = [5, 3, 6, 11];

// const allTemps = [...lastWeekTemp, ...currentWeekTemp, ...nextWeekTemp];
// console.log(allTemps);

// !!!!!!
// !!!!!!
// !!!!!!

// const a = { x: 4, z: 2, e: 3 };
// const b = { x: 1, y: 2 };

// const c = {
//   name: 'Mango',
//   ...a,
//   ...b,
//   y: 9,
// };

// console.log(c);

// !!!!!!!
// !!!!!!!

// const rgb = [255, 50, 50];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// !!!!!!
// !!!!!!

// const authors = {
//   kiwi: 4,
//   poly: 6,
//   ajax: 9,
//   bob: 5,
// };
// ИЛИ ИЛИ ИЛИ ИЛИ ИЛИ ИЛИ

// const entries = Object.entries(authors);

// for (const entry of entries) {
//   const name = entry[0];
//   const rating = entry[1];

//   console.log(name, rating);
// }
//ИЛИ ИЛИ ИЛИ ИЛИ ИЛИ ИЛИ

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!

// const playlist = {
//   name: 'My playlits',
//   rating: 4,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount } = playlist;

// console.log(name, rating, tracks, trackCount);

// !!!!!!!!
// !!!!!!!!
// !!!!!!!

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   avatar: './jss/images/img.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { name, tag, location, avatar, stats } = profile;

// const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);

// !!!!!!!!
// !!!!!!!

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   avatar: './jss/images/img.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);

// !!!!!
// 1!!!!!!
// !!!!!!!

// const showProfileInfo = function ({
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Jamaica',
//   avatar: './jss/images/img.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile);

// !!!!!
// !!!!!!
// !!!!!!!!

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('Hашли продукт -', productName);
//         console.log(i);

//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };
// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'pie', price: 85 });
// cart.add({ name: 'watermelon', price: 95 });
// cart.add({ name: 'watermelon', price: 95 });
// cart.add({ name: 'watermelon', price: 95 });

// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('pie');
// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

// !!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`);
