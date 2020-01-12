const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[1] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => FAIL

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => PASS

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5]
    ]
  ),
  false
); // => FAIL
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => FAIL
