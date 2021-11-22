// console.time();

// var p1 = new Promise((resolve, reject) => {
//   console.log("one");
//   setTimeout(() => {
//     resolve("res one");
//   }, 4000);
// });

// var p2 = new Promise((resolve, reject) => {
//   console.log("two");
//   setTimeout(() => {
//     resolve("res two");
//   }, 3000);
// });

// var p3 = new Promise((resolve, reject) => {
//   console.log("three");
//   setTimeout(() => {
//     resolve("res three");
//   }, 2000);
// });

// var p4 = new Promise((resolve, reject) => {
//   console.log("four");
//   setTimeout(() => {
//     resolve("res four");
//   }, 1000);
// });

// var p5 = new Promise((resolve, reject) => {
//   console.log("five");
//   setTimeout(() => {
//     reject("res five");
//   }, 1000);
// });

// var promises = [];
// promises.push(p1);
// promises.push(p2);
// promises.push(p3);
// promises.push(p4);
// promises.push(p5);
// Promise.all(promises)
//   .then((response) => {
//     console.timeEnd();
//     console.log("response=>", response);
//   })
//   .catch((err) => {
//     console.error("err=>", err);
//   });

const cars = [
  { brand: "Mercedes" },
  { brand: "BMW" },
  { brand: "Audi" },
  { brand: "Seat" },
  { brand: "Skoda" },
  { brand: "Tesla" },
];

var promises = [];
for (const carItem of cars) {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(carItem);
    }, 1000);
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((response) => {
    console.timeEnd();
    console.log("response=>", response);
  })
  .catch((err) => {
    console.error("err=>", err);
  });
