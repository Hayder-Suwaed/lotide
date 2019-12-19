/*
Task: Create our own version of map
Our map function will take two arguments:
1. An array to map
2. A callback function
3. Return a new array based on the results of the callback function
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item[0]);
  }
  return results;
};

assertArraysEqual(map(["ground", "control", "to", "major", "tom"]), [
  "g",
  "c",
  "t",
  "m",
  "t"
]);
assertArraysEqual(map(["Toronto", "London", "Athens", "Manila", "Muscat"]), [
  "T",
  "L",
  "A",
  "M",
  "M"
]);
assertArraysEqual(map(["Gracie", "caitlyn", "Joana", "edith", "Julie"]), [
  "G",
  "c",
  "J",
  "e",
  "J"
]);
