const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`\u2705 Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`\uD83D\uDD34 Assertion Failed: "${actual}" !== "${expected}"`);
};

module.exports = assertEqual;
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

const head = function(arr) {
  return arr[0] ? arr[0] : undefined;
};

module.exports = head;
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


