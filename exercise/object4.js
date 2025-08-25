class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  hasShortName() {
    return this.first.length >= 3;
  }
}

let user = new User("Kginsey", "Huang");

console.log(user.first, user.last, user.hasShortName());
