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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(
      `😁😁😁, Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `👎👎👎, Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const obj1 = { a: "1", b: "2" };
const obj2 = { b: "2", a: "1" };

const obj3 = { a: "3", b: "4", c: "1" };
const obj4 = { a: "4", b: "2" };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj3, obj4);
