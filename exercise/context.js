const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const person = {
  name: "Kingsley",
};

dummyFunction = function () {
  const newfunction = user.sayHi.bind(person);
  newfunction();
};
setTimeout(user.sayHi.bind(person), 1000);

// const printKingsley = function () {
//   console.log("Kingsley");
// };
// setTimeout(printKingsley, 1000);
