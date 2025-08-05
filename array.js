let countries = ["United States", "Brazil", "France", "Italy", "Spain"];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

let temp = countries[1];
countries[1] = countries[4];
countries[4] = temp;

console.log("countries", countries);
