const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');


assertEqual(eqObjects({ a: { z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },
  { a: 1, b: 2 }), false); // => false
