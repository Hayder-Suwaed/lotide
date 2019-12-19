const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`;
  }
};

//allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  var numOfNames = {};
  for (var i = 0; i < firstNames.length; i++) {
    if (typeof numOfNames[firstNames[i]] === "undefined") {
      numOfNames[firstNames[i]] = 1;
    } else {
      numOfNames[firstNames[i]]++;
    }
  }
  console.log(numOfNames);
  return numOfNames;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));

module.exports = countOnly;
