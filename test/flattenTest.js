const flatten = require('../flatten');
const assert = require('chai').assert;

assert(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
