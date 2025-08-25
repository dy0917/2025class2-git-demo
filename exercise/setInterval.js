let intervalTimer = setInterval(() => {
  console.log("repeatInterval: repeated "); // keep track of how many times the interval has executed, in outer environment
}, 1000);

class Laptop {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
  getFans() {
    return this.#numCPUFans;
  }
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.getFans()); // error: private property is not accessible
