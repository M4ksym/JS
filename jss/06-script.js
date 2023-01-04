// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuatity(productName) {},
// };
// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'pie', price: 90 });
// cart.add({ name: 'watermelon', price: 95 });

// console.table(cart.getItems());

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!!

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`);

// !!!!!!!!
// !!!!!!!

//  SPREAD !!!!!

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9, 0]);
// console.log(numbers);

// !!!!!!!!

// const numbers = [5, 6, 7, 8, 12, 13, 14, ...[1, 2, 3, 4]];
// console.log(numbers);

// !!!!!!

// const temps = [10, 23, 35, 40, 59, 800];
// console.log(Math.max(...temps));

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

// const authors = {
//   kiwi: 4,
//   poly: 6,
//   ajax: 9,
//   bob: 5,
// };

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!

// Dest

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

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Jamaica',
  avatar: /images /gim.jpg,
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

console.log(profile);
