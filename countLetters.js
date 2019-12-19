const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u1F60A, \u1F60A, \u1F60A, Assertion Passed:  ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `\u1F92C, \u1F92C, \u1F92C, Assertion failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(phrase) {
  const countStats = {};
  for (var letter of phrase.split("")) {
    countStats[letter] = 0;
  }
  for (var a in countStats) {
    for (var b of phrase.split("")) {
      if (a === b) {
        countStats[a]++;
      }
    }
  }

  return countStats;
};
console.log(countLetters("abcdefghijklmvwxyzabcde"));
