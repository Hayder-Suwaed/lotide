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
            if(!eqArrays(object1[a], object2[a])) {
                return false;
            }
        }
    }
    return true;
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
