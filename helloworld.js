function sayHello() {
  var firstName = "Kingsley";
  console.log("Hello");
}

function sum(a, b) {
  const result = a + b;
}

function returnSum(a, b) {
  return a + b;
}

var result = returnSum(1, 5); //undefined

let firstName = "Kingsley";

console.log("1", firstName);
firstName = "Ethan";
console.log("2", firstName);
