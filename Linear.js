const Matrix = (function () {
  // CONSTRUCTOR //
  function Matrix(values = []) {
    // Make sure that the incoming array can be turned into a valid Matrix //
    this.verifyMatrix = (values) => {
      // If the incoming values aren't an array immediately values are invalid matrix
      let isValid = values instanceof Array;
      // Evaluate the type of the first element in the array
      // This is important for checking each element in the incoming
      // array against one another to evaluate if they are all of the same type
      // i.e [1, [1,1], 1] would be invalid, this is what we want to prevent
      let prevType = values[0] instanceof Array;
      // Initializing the variable used to check the length of each element if the element is an array
      // [ [1,1], [1], [1,1] ] would be an invalid matrix
      let prevLength = prevType && values[0].length;
      // THE LOOP //
      for (var i = 1; i < values.length && isValid; i++) {
        // Determine the current type
        let curType = values[i] instanceof Array;
        // Is the current type the same as the previous type?
        // The matrix is invalid if they aren't equal
        isValid = curType === prevType;
        // If the current type is in fact an array //
        if (curType) {
          // Compare it to the previous length
          // Not a valid matrix if they are non equal
          isValid = prevLength === values[i].length;
        }
        // Set the previous type to the current type before the loop restarts
        prevtype = curType;
      }
      return isValid;
    };
    try {
      // Verify the matrix
      if (this.verifyMatrix(values)) {
        this._values = values;
        // If the matrix is going to be multi dimensional
        if (values[0] instanceof Array) {
          this._n = values[0].length;
          this._m = values.length;
          // Otherwise it's just a regular array basically
        } else {
          this._n = values.length;
          // Special condition for m, if n is less than one the matrix is empty
          this._m = this._n > 1 ? 1 : 0;
        }
      } else {
        throw "Not a valid matrix, all rows must be the same length. Initial Matrix must also be of type Array";
      }
    } catch (e) {
      console.log(e);
    }
  }
  Matrix.prototype.getAsArray = function () {
    return this._values;
  };
  Matrix.prototype.scale = function (scalar) {
    try {
      if (typeof scalar === "number") {
        if (this._n < 1) {
          return 0;
        } else if (this._m === 1) {
          this._values = this._values.map((e) => e * scalar);
        } else if (this._m > 1) {
          this._values = this._values.map((e) => e.map((q) => q * scalar));
        }
      } else {
        throw "type of scalar must be number";
      }
    } catch (e) {
      console.log(e);
    }
  };
  return Matrix;
})();

// Returns a matrix of zeros in a given shape
function zeros(m, n) {
  if (m > 1) {
    return new Matrix(new Array(m).fill(new Array(n).fill(0)));
  }
  return new Matrix(Array(n).fill(0));
}

// Multiply a matrix by a matrix
function multiply(m1, m2) {
  // Build a result object
  let res = zeros(m1._m, m2._n);
  //let res = [];
  try {
    // Are both inputs actually matrices?
    if (m1 instanceof Matrix && m2 instanceof Matrix) {
      // Is matrix multiplication actually possible with the given inputs?
      if (m1._n != m2._m) {
        throw "Column of matrix 1 count must equal row count for matrix 2 for multiplication to be possible!";
      } else if (m1._n === 0) {
        throw "Both matrices must contain data for multiplication to be possible";
        // <--- THE MATRIX MULTIPLICATION ALGO BEGINS ---> //
        // If the first matrix is just a regular array
      } else if (m1._m === 1) {
        for (var c = 0; c < m2._n; c++) {
          for (var i = 0; i < m1._n; i++) {
            res._values[c] += m1._values[i] * m2._values[i][c];
          }
        }
      } else {
        for (var r = 0; r < m1._m; r++) {
          for (var c = 0; c < m2._n; c++) {
            for (var i = 0; i < m1._n; i++) {
              res._values[r][c] += m1._values[r][i] * m2._values[i][c];
            }
          }
        }
      }
    } else {
      throw "Both arguments must be of type Matrix";
    }
  } catch (e) {
    console.log(e);
    return;
  }
  return res;
}

// Multiply a matrix by a scalar
function scale(matrix, scalar) {
  let res = new Matrix(matrix._values);
  res.scale(scalar);
  return res;
}

module.exports = {
  Matrix: Matrix,
  multiply: multiply,
  scale: scale,
  zeros: zeros,
};
