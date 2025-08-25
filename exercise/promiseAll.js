const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(1000), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(2000), 2000);
});

async function promiseAll() {
  try {
    const result = await Promise.all([promise2, promise1]); // map

    console.log("resutl", result);
  } catch (e) {
    console.log(e);
  }
}
promiseAll();
