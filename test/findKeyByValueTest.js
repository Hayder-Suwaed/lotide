const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue(object, value)', () => {
  it('should return drama when the value is The wire , drama', () => {
    assert.deepEqual(findKeyByValue({ 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"} , "The Wire"), "drama");
  });
    it('should return sci-fi when the value is "The Expanse" , sci_fi', () => {
      assert.deepEqual(findKeyByValue({ 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"} , "The Expanse"), "sci_fi");
    ;})
  
    it('should return undefined when the value is "Blue is the warmest color" ', () => {
      assert.deepEqual(findKeyByValue({ 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"} , "Blue Is the Warmest Color"), undefined);
    ;})})

