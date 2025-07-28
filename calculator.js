function sum(a, b) {
  if (typeof a !== "number") {
    return "A must be a number";
  }

  if (typeof b !== "number") {
    return "B must be a number";
  }

  return a + b;
}

console.log(sum("a", "b"));
console.log(sum(1, 2));
if (sum(1, 2) == 3) {
  console.log("ok");
} else {
  console.log("something wrong");
}

if (sum("a", 2) == "A must be a number") {
  console.log("ok");
} else {
  console.log("something wrong");
}

if (sum(1, "b") == "B must be a number") {
  console.log("ok");
} else {
  console.log("something wrong");
}

// // function minus(a, b) {
// //   return a - b;
// // }

// if (minus(13, 2) === 11) {
//   console.log("ok");
// } else {
//   console.log("something wrong");
// }
