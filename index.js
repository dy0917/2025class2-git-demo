const user = {
  first_name: "Sammy",
  last_name: "Shark",
  age: 25,
  followers: 987,
};

user.followers = 988;
user.address = {
  lane: "1",
  city: "Auckland",
};

user.todolist = [];
user.sayHi = () => {
  console.log("say hi");
};
console.log(user);

user.sayHi();
