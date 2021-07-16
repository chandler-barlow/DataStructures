module.exports = (function () {
  function Matrix(values = []) {
    this.verifyMatrix = (values) => {
      let isValid = values instanceof Array;
      let prevType = values[0] instanceof Array;
      let prevLength = prevType && values[0].length;
      for (var i = 1; i < values.length && isValid; i++) {
        let curType = values[i] instanceof Array;
        isValid = curType === prevType;
        if (curType) {
          isValid = prevLength === values[i].length;
        }
        prevtype = curType;
      }
      return isValid;
    };
    try {
      if (this.verifyMatrix(values)) {
        this._values = values;
        if (values[0] instanceof Array) {
          this._m = values.length;
          this._n = values[0].length;
        } else {
          this._m = this._n > 1 ? 1 : 0;
          this._n = values.length;
        }
      } else {
        throw "Not a valid matrix, all rows must be the same length. Initial Matrix must also be of type Array";
      }
    } catch (e) {
      console.log(e);
    }
  }
  Matrix.prototype.multiplyBy = function (otherMatrix) {
    try {
      if (typeof otherMatrix === "number") {
        if (this._n < 1) {
          return 0;
        } else if (this._m === 1) {
          console.log("ran");
          this._values = this._values.map((e) => e * otherMatrix);
        } else if (this._m > 1) {
          this._values = this._values.map((e) => e.map((q) => q * otherMatrix));
        }
      } else if (otherMatrix instanceof Matrix) {
        if (this._m != otherMatrix._n) {
          throw "Row of  count must equal column count for matrix multiplication to be possible!";
        }
        let res = [];
      }
    } catch (e) {
      console.log(e);
    }
  };
  return Matrix;
})();
