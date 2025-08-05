function generateRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Math.random() * max get float number between 0 to max

console.log(generateRandom(6)); // 0 - 1 * 6 // 0, 1,2 ,3 ,4,5

console.log(generateRandom(10)); 
