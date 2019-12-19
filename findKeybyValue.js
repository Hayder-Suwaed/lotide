const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create function findKeybyValue which
//takes in an object and value
//it should loop thruogh the object
//and return the first key which contains that value
//if no key with that given  value is found, return undefined.

const findKeyByValue = function(obj, value) {
  for (let genre of Object.keys(obj)) {
    if (obj[genre] === value) {
      return genre;
    }
  }
  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine=Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Lost"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
