const Linear = require("./Linear.js");
const Matrix = Linear.Matrix;
const m1 = new Matrix([
  [2, 2],
  [2, 2],
]);
const m2 = new Matrix([[1], [1]]);
const m3 = Linear.scale(m1, 10);
console.log(Linear.multiply(m1, m2));
