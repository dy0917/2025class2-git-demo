function loggingTimingDecorator(originalFunction) {
  // same"" decorator function as before

  return function () {
    // BUT now the returned
    // function doesn't name its arguments from here
    console.time("Function timer");
    console.log(`\nExecuting function ...`);
    //const result = originalFunction(name); // WON'T work as name is now undefined
    //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
    const result = originalFunction.apply(this, arguments); // and so does this - try out both
    console.log(arguments); // [Arguments] { '0': 8 }
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}

const helloWorld = function (fn) {
  console.log("hello", this.name);
  console.log(`${fn}`);
};

const loggingHelloWorld = loggingTimingDecorator(helloWorld);
loggingHelloWorld("world");

helloWorld("world");
