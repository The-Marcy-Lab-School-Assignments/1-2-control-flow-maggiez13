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

// happyBirthdayPet("snake", 5);
// happyBirthdayPet("cat", 3);
// happyBirthdayPet("cat", 5);
// happyBirthdayPet("cat", 7);
// happyBirthdayPet("dog", 3);
// happyBirthdayPet("dog", 5);
// happyBirthdayPet("dog", 9);
// happyBirthdayPet("dog", 10);
// happyBirthdayPet("dog", 12);
// happyBirthdayPet("horse", 13);

const funTypes = (jsType) => {

};

const rounder = () => {
};

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!")
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(num);
  }
};

// fizzBuzzish(1);
// fizzBuzzish(2);
// fizzBuzzish(3);
// fizzBuzzish(4);
// fizzBuzzish(5);
// fizzBuzzish(10);
// fizzBuzzish(12);
// fizzBuzzish(15);
// fizzBuzzish(30);
// fizzBuzzish(31);


module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
