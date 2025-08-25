function sayHi() {
  return `${this.name}`;
}

const person = {
  name: "kingsley",
};

const reuslt = sayHi.apply(person);
const personSayhi = sayHi.bind(person);

function printout(calBack) {
  console.log(calBack());
}

printout(reuslt);
