Boolean(""); //false 4 true 1

let person = {
  firstName: "Kingsley",
};

let person2 = person;
let person3 = person2;

let tempPerson = {
  firstName: "Kingsley",
};
console.log("person == tempPerson", person == tempPerson); // true 1 false 1

console.log("person == person2", person == person2); //true 1

let name = "kingsley";
let name2 = name;
name2 = "Jason";
