async function promiseDemo() {
  const promise1 = new Promise(function (resolve) {
    resolve("this is promise 1");
  });

  const promise2 = new Promise(function (resolve) {
    resolve("this is promise 2");
  });

  const result = await Promise.all([promise2, promise1]);
  console.log(result);
}

promiseDemo();
