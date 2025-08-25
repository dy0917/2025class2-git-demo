function makeAdder() {
 
  let count = 1;
  // function factory: bundles value of x into the scope of adder
  return function adder(y) {
    // lexical env
    console.log(count);
    count++;
    // closure function 'adder' now has access to both x and y when created
    return y;
  };
}

function minus(x, y) {
  console.log(count);
  count++;
  return x - y;
}

minus(1, 2);
