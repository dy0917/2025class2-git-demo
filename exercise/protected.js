class Car {
  #oilLevel = 0;
  increase() {
    this.#oilLevel++;
  }
  decrease() {
    this.#oilLevel--;
  }
}

const toyota = new Car();
const porshe = new Car();
