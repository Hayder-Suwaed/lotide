const middle = function(array) {
 var result = []
if (array.length <= 2 ){
result = [];
}
else if (array.length % 2 === 0 && array.length >2)
{
result.push(array[(array.length /2)-1])
result.push( array[array.length/2]);
}
else if (array.length === 3)
{
result.push(array[1])
}
else
{
 result.push(array[Math.floor(array.length/2)])
}
return result
}
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







assertArraysEqual(middle([1, 2, 4, 3, 4]), [4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4] 
