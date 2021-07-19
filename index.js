const lin = require("./Linear.js");
const { Matrix } = lin;
const m1 = new Matrix([
  [2, 2],
  [2, 2],
]);
const m2 = new Matrix([1, 1]);
const m3 = lin.scale(m1, 10);
const l = m1.asArray();
l[0][0] = 9;
console.log(lin.multiply(m2, m1));
