const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
