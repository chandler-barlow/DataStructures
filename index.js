const Matrix = require("./Matrix.js");
const m = new Matrix([
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]);
m.multiplyBy(0.5);
console.log(m);
