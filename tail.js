const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

module.exports = assertEqual;
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
const tail = function(arr) {
  return arr.length > 2 ? arr.slice(1) : [];
};

module.exports = tail;

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!