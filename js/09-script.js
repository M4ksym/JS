// !!!!!!!!!
// !!!!!!!!!!

//          Модуль 4. Занятие №9. Ключевое слово this

// !!!!!!!!!!

// const user = {
//   tag: 'Petya',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };
// user.showTag();

// !!!!!!!!!
// 1!!!!!!!!!

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };

// const user = {
//   tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// !!!!!!!!!
// !!!!!!!!!

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// 1!!!!!!!!!!!
// !!!!!!!!!!!!

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// user.showTag();
// invokeAction(user.showTag);

// !!!!!!!!
// !!!!!!!!

// const fn = function () {
//   console.log('fn -> this', this);
// };

// fn();

// !!!!!!!!
// !!!!!!!!

// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis();

// !!!!!!!!!!
// !!!!!!!!!!
// !!!!!!!!!!

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue');

// !!!!!!!!!
// !!!!!!!!!!
// !!!!!!!!!!

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// // updateColor('yellow'); ???

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('orange');
// console.log(hat);

// !!!!!!!!!
// 1!!!!!!!!!
// !!!!!!!!!

//          call and apply

// const showThis = function (...args) {
//   console.log(args);
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 1, 5, 66, 899, 20);

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };
