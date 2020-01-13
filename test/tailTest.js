
const assert = require('chai').assert;
const tail = require("../tail");
describe('tail()', () => {
    it('should return [20,30,40,50] when passed [10, 20, 30, 40, 50]', () => {
      assert.deepEqual(tail([10,20,30,40,50]), [20, 30, 40, 50]);
    });
    });
