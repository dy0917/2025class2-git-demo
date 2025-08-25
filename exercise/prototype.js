const person = {
  name: "Person",
  sayHi(a, b) {
    console.log(`Hi ${this.name} ${a} ${b}`);
  },
};

function executableFunction() {}
function returnFunction() {
  return "something";
}

const result = executableFunction();
const returnResult = returnFunction();

console.log("result", result);
console.log("returnResult", returnResult);

const kings = {
  name: "Kingsley",
};


// console.log(person.sayHi());

// console.log(person.sayHi.apply(kings));

// console.log(typeof person.sayHi.bind(kings));

// setTimeout( person.sayHi.apply(kings), 1000);

// const anewFunction = person.sayHi.bind(kings);
// anewFunction();
