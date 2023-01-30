//            ЕЩЕ СТРЕЛОЧНЫЕ ФУНКЦИИ

// const add = function (a, b) {
//   return a + b;
// };

// add(4, 9);

// console.log(add(5, 9));

// !!!!!!!!
// 1!!!!!!!

// const number = (a, b) => {
//   console.log('qweqwe');
//   return a + b;
// };

// console.log(number(11, 4));

// !!!!!!
// !!!!!!!

// const greet = () => {
//   console.log('Привет');
// };
// greet();

// 0
// 0

// !!!!!!!!
// !!!!!!!!

// 0
// 0

// //            ЯВНЫЙ ВОЗВРАТ
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(33, 11));

// //             НЕ ЯВНЫЙ ВОЗВРАТ

// const greet = (a, b) => a + b;
// console.log(greet(11, 33));

// !!!!!!!!
// !!!!!!!!!!
// 1!!!!!!!!

// const add = (...args) => {
//   console.log(args);
// };

// add(2, 3, 4, 5, 6, 7, 8);

// 1!!!!!!
// 1!!!!!!!
// !!!!!!!!

// const showThis = () => {
//   console.log('this is showThis', this);
// };

// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this :', this);
//     console.log('this.fullName:', this.fullName);

//     const inner = () => {
//       console.log('this is inner:', this);
//     };
//     inner();
//   },
// };

// user.showName();

// !!!!!!!
// !!!!!!!!
// 1!!!!!!!!

//        СТРЕЛКА НЕ МЕТОД ОБЪЕКТА
// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this :', this);
//     console.log('this.fullName:', this.fullName);
//   },
// };

// user.showName();

// !!!!!!!!!
// !!!!!!!!!
// 1!!!!!!!!

// const objA = {
//   x: 5,
//   showX() {
//     console.log('this в objA.showX:', this);
//     console.log(this.x);

//     const objB = {
//       y: 7,
//       showThis() {
//         console.log('this в objB.showX:', this);
//       },
//     };
//     objB.showThis();
//   },
// };

// objA.showX();

// !!!!!!!!
// !!!!!!!!
// !!!!!!!!!

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// +++++++++++

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });

//         =>      =>      =>

// const greaterThenTwo = numbers.filter(num => num > 2);

// console.log(greaterThenTwo);

// ++++++++++++

// const ByTwo = greaterThenTwo.map(num => num * 3);
// console.log(ByTwo);

// +++++++++

// const res = numbers
//   .filter(function (num) {
//     return num > 2;
//   })
//   .map(function (num) {
//     return num * 3;
//   })
//   .soft(function (a, b) {
//     return a - b;
//   });

//   =>   =>  =>   =>

// const res = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .soft((a, b) => a - b);

// console.log(res);

// !!!!!!
// !!!!!!!!!

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 94, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 300, points: 48, online: true },
//   { id: 'player-4', name: 'Bono', timePlayed: 200, points: 74, online: true },
//   { id: 'player-5', name: 'Mao', timePlayed: 30, points: 84, online: true },
// ];
// console.table(players);

// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

//   =>  =>  =>  =>  =>

// const updatedPlayers = players.map(player => {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

//    =>   =>   =>   =>   =>   =>

// const updatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points + player.points * 0.5,
// }));

// console.table(updatedPlayers);

// !!!!!!!!!
// !!!!!!!!!!!
// !!!!!!!!!!

// const updatedPlayers = players.map(players =>
//   player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 30 }
//     : player,
// );

// console.table(updatedPlayers);
