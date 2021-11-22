// const func = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("İşlem Tamamlandı!");
//     }, 5000);
//   });
//   let result = await promise;

//   console.log("result", result);
// };

// func().then((res) => {
// //   console.log(res);
// });

const cars = [
  { brand: "Auid", name: "A3" },
  { brand: "BMW", name: "3.20" },
  { brand: "Mercedes", name: "C200" },
];

const addCar = async (newCar) => {
  const promise1 = new Promise((resolve, reject) => {
    console.log("Araç ekleniyor...");
    setTimeout(() => {
      cars.push(newCar);
      resolve("Araç başarıyla eklendi!");
    }, 2000);
  });

  return promise1;
};

async function showCars(res) {
  try {
    console.log("Add Car metodu çalışacak");
    await addCar({ brand: "Seat", name: "Ibiza" });
    console.log("Add Car metodu çalıştı");
    console.log("cars", cars);
  } catch (error) {
    console.log("error", error);
  }
}

showCars().then((res) => {
  //   console.log(res);
});
