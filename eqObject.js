const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  // check if the key lengths equal
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let item in object1) {
      // check if primitives
      if (typeof(object1[item]) === "string" && typeof(object2[item]) === "string") {
        if (object1[item] !== object2[item]) {
          return false;
        }
      // check if arrays
      } else if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item]) !== true) {
          return false;
        }
      // check objects
      } else {
        if (!eqObjects(object1[item], object2[item])) return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;
