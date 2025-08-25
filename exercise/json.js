const box1 = {
  size: "large",
  dimensions: { width: 50, length: 70, height: 30, units: "cm" },
  items: ["glasses", "plates", "cutlery"],
};

const box2 = JSON.parse(JSON.stringify(box1));

box2.dimensions.width = 100;

console.log("box1", box1);

console.log("box2", box2);

const clone = structuredClone(box1);
clone.dimensions.width = 500;
console.log(clone);
console.log(box1);
