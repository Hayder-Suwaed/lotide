const eqArrays = require('./eqArrays');
  const assertArraysEqual = function(array1, array2) {
  const match = eqArrays(array1,array2)
  if ( match) {
  console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  }
  else {
  console.log(`🛑🛑🛑Asseration Failed: ${array1} !== ${array2}`);
  }
  return array1;
  };
  

module.exports = assertArraysEqual;
