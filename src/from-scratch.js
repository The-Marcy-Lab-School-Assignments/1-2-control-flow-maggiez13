// need to fix
const measureRain = (inches) => {
  if (inches === 0) {
    console.log("drought");
  } else if (inches < 2) {
    console.log("dry");
  } else if (inches < 4) {
    console.log("average");
  } else if (inches < 6) {
    console.log("rainy");
  } else {
    console.log("flood");
  }
};

// (measureRain(0));
// (measureRain(1));
// (measureRain(2));
// (measureRain(3));
// (measureRain(4));
// (measureRain(5));
// (measureRain(6));
// (measureRain(7));
// (measureRain(10));


const happyBirthdayPet = (breed, age) => {
  if (breed === "snake") {
    console.log("Hiss hiss!");
  } else if (breed === "cat" && age < 5) {
    console.log("Mew mew!");
  } else if (breed === "cat" && age  >= 5) {
    console.log("Meow meow!");
  } else if (breed === "dog" && age < 5) {
    console.log("Arf arf!");
  } else if (breed === "dog" && age >= 5 && age < 10) {
    console.log("Woof woof!");
  } else if (breed === "dog" && age >= 10) {
    console.log("Boof!");
  } else {
    console.log("Happy birthday!");
  }
};

// console.log(happyBirthdayPet("snake", 5));
// console.log(happyBirthdayPet("cat", 3));
// console.log(happyBirthdayPet("cat", 5));
// console.log(happyBirthdayPet("cat", 7));
// console.log(happyBirthdayPet("dog", 3));
// console.log(happyBirthdayPet("dog", 5));
// console.log(happyBirthdayPet("dog", 9));
// console.log(happyBirthdayPet("dog", 10));
// console.log(happyBirthdayPet("dog", 12));
// console.log(happyBirthdayPet("horse", 13));

const funTypes = (jsType) => {

};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
