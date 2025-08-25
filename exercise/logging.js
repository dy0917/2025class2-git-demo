function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}
printGreeting("Undecorated");

function adder(a, b) {
  console.log("a, b", a, b);
  return a + b;
}

function adder3(a, b, c) {
  console.log("a, b", a, b, c);
  return a + b + c;
}

function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function () {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    console.log("arguments", ...arguments);
    const result = originalFunction.call(null, ...arguments); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
const decoratedAdder = loggingTimingDecorator(adder3);
decoratedAdder(1, 2, 3);
