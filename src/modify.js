const wildlyBiasedReview = (location) => {
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    return console.log('Yea that place is cool I guess');
  }
};

console.log(wildlyBiasedReview("NYC"));
console.log(wildlyBiasedReview("LA"));

module.exports = {
  wildlyBiasedReview,
};
