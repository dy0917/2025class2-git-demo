const user = {
  name: "Bilbo Baggins",
  stock: 100,
  printThis() {
    console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  },
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
  addStock() {
    this.stock++;
    return this;
  },

  saleStock() {
    this.stock--;
    return this;
  },
  showStock() {
    console.log(this.stock);
  },
};
// const a = user.printThis();
// a.printGreeting();

// user.saleStock();
// user.saleStock();
// user.addStock();
// user.showStock();

user.saleStock().saleStock().addStock().showStock();

console.log(user.stock);
