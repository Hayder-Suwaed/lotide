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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let x = Object.keys(object1);
  let y = Object.keys(object2);

  if (x.length !== y.length) {
    return false;
  }
  for (let a of x) {
    if (x[a] !== y[a]) {
      return false;
    }
    if (Array.isArray(object1[a]) && Array.isArray(object2[a])) {
      if (!eqArrays(object1[a], object2[a])) {
        return false;
      }
    }
  }
  return true;
};

assertEqual(
  eqObjects({ a: { z: { x: 1 }, b: 2 } }, { a: { z: { x: 1 }, b: 2 } }),
  true
);
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
