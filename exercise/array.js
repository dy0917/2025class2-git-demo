const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
];

products.reduce((total, item) => {
  console.log(total, item.price);
  return total + item.price;
}, 0);

let total = 0;
products.forEach((item) => {
  total = total + item.price;
});

// const marks = ["A+", "C+", "B-", "D", "B+", "C+", "B-"];

// const uniqueMarks = [];
// marks.forEach((element, index) => {
//   if (marks.indexOf(element) === marks.lastIndexOf(element)) {
//     uniqueMarks.push(element);
//   }
// });

console.log(uniqueMarks);

// const mark = mark[0];

// marks.forEach(() => {
//   marks.forEach;
// });

// const uniqueMarks = new Set(marks);
// console.log(uniqueMarks);

// function isUniqueElement(element) {
//   const index = marks.indexOf(element);
//   const lastIndex = marks.lastIndexOf(element);
//   return index !== -1 && index === lastIndex;
// }

// console.log("isUniqueElement", isUniqueElement("A-"));
