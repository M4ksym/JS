const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuatity(productName) {},
};
console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'pie', price: 90 });
cart.add({ name: 'watermelon', price: 95 });

console.table(cart.getItems());
