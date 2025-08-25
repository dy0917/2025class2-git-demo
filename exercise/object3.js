// let person = {
//   firstName: "Kingsley",
// };

// let person2 = {
//   firstName: "Kingsley",
// };

function User(first, last) {
  // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
  this.sayHiTo = (name) => {
    console.log(`Hi ${name}`);
  };
  this.sayHiEvery = () => {
    console.log(`Hi everyone`);
  };
}

const user = new User("Kingsley", "huang");

user.sayHiTo("Jason");
user.sayHiEvery();
