const names = new Set(["Pedro", "Oliver", "Jack", "Mateo", "Jack"]);
names.add("Mateo");
names.add("Oliver");
names.add("Bruno");
console.log(names.size); // 5 - only the unique names
console.log(names); // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

const numbers = [1, 2, 3, 1, 23, 556, 33, 2, 5];

const uniqueNumbers = new Set(numbers);

const uniqueNumberArray = Array.from(uniqueNumbers);
console.log(uniqueNumberArray);

