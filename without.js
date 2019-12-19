const without = function(source, itemsToRemove) {
var output = source;
 itemsToRemove.forEach(toRemove => {
 output = output.filter(elem => elem !== toRemove);
});
 console.log(output)
 return output;
};
const eqArrays = function(a , b ) {
 if (a.length !== b.length){
 return false
 }
 else {
 for (var i = 0; i < a.length; i++) {
 if (a[i] !== b[i]) {
 return false;
}}
return true
}}
const
assertArraysEqual = function(actual, expected) {
 const match = eqArrays(actual,expected)
 if ( match) {
 console.log(`Assertion Passed: ${actual} === ${expected}`);
 }
 else {
 console.log(`Asseration Passed: ${actual} !== ${expected}`);
 }
 return actual;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 