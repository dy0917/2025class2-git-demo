const box1 = {
  weight: "20kg",
  dimensions: {
    // nested object property
    width: "30cm",
    height: "10cm",
  },
};

const tempBox = {};
for (let key in box1) {
  tempBox[key] = box1[key];
}

const box2 = { ...box1 }; // shallow clone
box1.dimensions.height = "12cm"; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height change

console.log(box1);

const cloneBox = JSON.parse(JSON.stringify(box1));
cloneBox.dimensions.height = "40cm";

console.log("box1", box1);

console.log("cloneBox", cloneBox);
