//
//
//                            Урок Номер Пять

// const playlist = {
//   name: 'My playlits',
//   rating: 4,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// +++++++++++++++++++++++++++++++++

// const playlist = {
//   name: 'My playlits',
//   rating: 4,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
// };

// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// ++++++++++++++++++++++++++++++++++++++

// const playlist = {
//   name: 'My playlits',
//   rating: 4,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
// };
// const propertyName = 'tracks';

// console.log(playlist[propertyName]);
// console.log(playlist.propertyName);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const username = 'Mango';
// const email = 'mango@gmaol.com';

// const signupData = {
//   username: username,
//   email: email,
// };
// console.log(signupData);

// +++++++++++++++++++++++++++++++++++++

const username = 'Mango';
const email = 'mango@gmaol.com';

const signupData = {
  username,
  email,
};
console.log(signupData);

// !!!!!!!!
// !!!!!!!

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

// !!!!!!!!
// !!!!!!!!!
// !!!!!!!!

// const a = { x: 1, y: 1 };
// const b = a;

// console.log(a === b);

// 1!!!!!!
// !!!!!!!
// !!!!!!

// const a = [1, 2, 3, 4];

// a.push(5);

// console.log(a);

// !!!!!!
// !!!!!!
// !!!!!!

// const playlist = {
//   name: 'My playlist',
//   rating: 4,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
//   changeName(newName) {
//     // console.log(this);
//     this.name = newName;
//   },
//   addtrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };

// playlist.changeName('New Name');

// playlist.addtrack('New track');

// playlist.updateRating(1);

// console.log(playlist);

// !!!!!!!!
// !!!!!!!
// !!!!!!!

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 99,
// };
// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];

//   console.log('totalFeedback', totalFeedback);
// }

// !!!!!!
// !!!!!!
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 9,
// };
// let totalFeedback = 0;

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }
// console.log('totalFeedback', totalFeedback);

// !!!!!!
// !!!!!!
// !!!!!!
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);

//   friend.newprop = 555;
// }

// console.table(friends);
// !!!!!
// !!!!!

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === name) {
//       return 'Да,Вот Он';
//     }
//   }
// };
// console.log(findFriendByName(friends, 'Poly'));
// !!!!!
// !!!!!
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };
// console.log(getAllNames(friends));

// !!!!!!
// !!!!!!!
// !!!!!

// const friends = [
//   { name: 'Mango', online: true },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
//   { name: 'Jack', online: true },
//   { name: 'Jax', online: true },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getAllNames(friends));

// -------
// -------
// --------

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

// -----------
// -----------
// -----------
