function sayHi() {
  console.log("Hi");
  sayHi.counter++; // increment the custom counter property every time the function is called
}
sayHi.counter = 0; // initialise the counter to 0 before calling it

sayHi(); // Hi - calls the function and increments the counter
sayHi(); // Hi - calls the function and increments the counter again
console.log(`Called ${sayHi.name} ${sayHi.counter} times`); // Called sayHi 2 times

function makeSayHi() {
  let count = 0;
  console.log(arguments)
  return () => {
    count++;
    console.log("Hi");
    return count;
  };
  
}

const hi = makeSayHi();
