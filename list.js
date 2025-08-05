// swap position 1 to 4

const alist = [1, 6, 3, 4, 10];

const names = ["Jason", "Sam", "Richard", "John", "Kingsley"];

const temp = names[1];
console.log("temp", temp);
names[1] = names[4];
names[4] = temp;

//[alist[1], alist[3]] = [alist[3], alist[1]];

console.log(alist);

// function greeting(name, location) {
//   console.log(`Hello ${name} at ${location}!`);
//   console.log("Hello " + name + " at " + location + "!");
// }

// greeting("Jason", "Auckland");
