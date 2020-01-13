
const assert = require('chai').assert;

const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

describe('middle', () => {
    it('should return [2] when input array is [1,2,3]', () => {
      assert.deepEqual(middle([1,2,3]), [2]);
    });
    it('it should return [2,3] when input array is [1,2,3,4]', () => {
      assert.deepEqual(middle([1,2,3,4]), [2,3]);
    });})
