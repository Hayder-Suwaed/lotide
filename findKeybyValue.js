const findKeyByValue = function(obj, value) {
  console.log(Object.keys(obj));
  for (let item of Object.keys(obj)) {
    if (obj[item] === value) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
