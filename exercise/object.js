const name1 = "Kingsley";

let name2 = name1;

name2 = "Jason";

// console.log("name1", name1);
// console.log("name2", name2);

// const person1 = {
//   name: "kingsley",
// };

// const person2 = person1;

// person2.name = "Jason";

// console.log(person1.name);
// console.log(person2.name);

const person = { name: "a" };
const person1 = person;

const person3 = { name: "a" };
const person4 = { name: "a" };

const user = { name: "Elliot", age: 27 };

function update(originUser, incomeChanges) {
  return { ...originUser, ...incomeChanges }; //originUser name: "Elliot", age: 27 incomeChanges age:29 location
}

const changes = { age: 29, location: "Auckland" };
const updatedUser = update(user, changes);
console.log(updatedUser);

const completedUser = {
  name: "Elliot",
  age: 27,
  age: 29,
  location: "Auckland",
};

console.log("completedUser", completedUser);
