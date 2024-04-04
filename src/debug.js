const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
  // return Math.floor(Math.random() * max);
};

// console.log(getRandomIntInRange(5, 10));



const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 3 ? 'You are downright chilly!' : 'You need more fridges.';
};

// console.log(coolnessGauge(0));
// console.log(coolnessGauge(3));
// console.log(coolnessGauge(4));



const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

// funkoPopAddictionLevel(0);
// funkoPopAddictionLevel(1);
// funkoPopAddictionLevel(10);
// funkoPopAddictionLevel(11);
// funkoPopAddictionLevel(20);
// funkoPopAddictionLevel(21);
// funkoPopAddictionLevel(30);
// funkoPopAddictionLevel(31);
// funkoPopAddictionLevel(100);



const getWeatherReport = (temperature) => {
  const report = "And that's your report!"
  if (temperature > 90) {
    let weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
    console.log(report);
    return weatherReport;
  } else if (temperature > 70) {
    let weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
    console.log(report);
    return weatherReport;
  } else if (temperature < 32) {
    let weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
    console.log(report);
    return weatherReport;
  } else if (temperature === 32) {
    let weatherReport = "It's not too bad!";
    console.log(weatherReport);
    console.log(report);
    return weatherReport;
  }
};


getWeatherReport(100);
getWeatherReport(31);
getWeatherReport(71);
getWeatherReport(32);



// if num < 0, return positive -> need to change to > 
// else if num === 0, return zero
// else negative

  // if (num === 0) return "Zero";
  //   // if num = 0 return "Zero"
  // return (num < 1) ? "Negative" : "Positive";
  //   // else if num < 1 return "Negative"
  //   // else return "Positive"

  // 2 ternarys
  // return num > 0 ? "Positive" 
  //   : num === 0 ? "Zero"
  //   : "Negative"

const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return "Zero";
  } else if (num > 0) {
    return "Positive";
  } else return "Negative";
};



// console.log(returnPositiveNegativeZero(0));
// console.log(returnPositiveNegativeZero(1));
// console.log(returnPositiveNegativeZero(2));
// console.log(returnPositiveNegativeZero(-1));
// console.log(returnPositiveNegativeZero(-2));


module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
