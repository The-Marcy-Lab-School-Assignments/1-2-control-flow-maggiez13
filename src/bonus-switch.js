const measureRainSwitch = (inches) => {
  switch (true) {
    case inches === 0:
      console.log("drought");
      break;
    case inches < 2:
      console.log("dry");
      break;
    case inches < 4:
      console.log("average");
      break;
    case inches < 6:
      console.log("rainy");
      break;
    default:
      console.log("flood");
  }
};


(measureRainSwitch(0));
(measureRainSwitch(1));
(measureRainSwitch(2));
(measureRainSwitch(3));
(measureRainSwitch(4));
(measureRainSwitch(5));
(measureRainSwitch(6));
(measureRainSwitch(7));
(measureRainSwitch(10));

const rounderSwitch = (float, roundSetting) => {
  switch (roundSetting) {
    case "up":
      return Math.ceil(float);
      break;
    case "down":
      return Math.floor(float);
      break;
    case "honest":
      return Math.round(float);
      break;
  }
};

console.log((rounderSwitch(1.0, 'up')));
console.log((rounderSwitch(1.1, 'up')));
console.log((rounderSwitch(3.9, 'up')));
console.log((rounderSwitch(1.9, 'down')));
console.log((rounderSwitch(5.0, 'down')));
console.log((rounderSwitch(5.1, 'down')));
console.log((rounderSwitch(1.9, 'honest')));
console.log((rounderSwitch(1.5, 'honest')));
console.log((rounderSwitch(1.4, 'honest')));
console.log((rounderSwitch(1.0, 'honest')));

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
