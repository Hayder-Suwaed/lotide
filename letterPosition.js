const letterPositions = function(str) {
  const results = {};
  let count = 0;
  let input = str.split("");

  for (let letter of input) {
    if (letter === " ") {
      count ++;
    } else if (results[letter]) {
      results[letter].push(count);
      count ++;
    } else {
      results[letter] = [];
      results[letter].push(count);
      count ++;
    }
  }

  return results;
};

module.exports = letterPositions;
