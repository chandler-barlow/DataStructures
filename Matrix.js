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
          this._m = values[0].length;
          this._n = values.length;
        } else {
          this._m = values.length;
          this._n = this._m > 1 ? 1 : 0;
        }
      } else {
        throw "Not a valid matrix, all rows must be the same length. Initial Matrix must also be of type Array";
      }
    } catch (e) {
      console.log(e);
    }
  }
  Matrix.prototype.multiply = function (otherMatrix) {
    if (otherMatrix instanceof Number) {
      if (this._m < 1) {
        return 0;
      } else if (this._n === 1) {
        this._values = this._values.map((e) => e * otherMatrix);
      } else if (this._n > 1) {
      }
    } else if (otherMatrix instanceof Matrix) {
    }
  };
  return Matrix;
})();
