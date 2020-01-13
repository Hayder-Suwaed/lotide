const eqArrays = require('./eqArrays')
const middle = function(array) {
  let result = []
if (array.length <= 2 ){
 result = [] 
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

module.exports = middle;

