const Heap = (function () {
  function Heap(heapType) {
    if (heapType !== "max" && heapType !== "min") {
      console.log(
        heapType,
        " is not a supported heap type! max or min are only possible arguments."
      );
      throw "Unsupported heap type";
    }
    this._heapType = heapType;
    this._elements = [];
  }
/**
 * Swaps elements
 * The first and second element get swapped.
 * @param {number} indexOne - The index of the first element
 * @param {number} indexTwo - The index of the second element
 * @return {void}
 */
  Heap.prototype._swap = function (indexOne, indexTwo) {
    let temp = this._elements[indexOne];
    this._elements[indexOne] = this._elements[indexTwo];
    this._elements[indexTwo] = temp;
  };

  Heap.prototype._parentIndex = function (index) {
    return Math.floor((index - 1) / 2);
  };

  Heap.prototype._heapify = function () {
    if (this._heapType === "max") {
      let heapifyCompleted = false;
      while (!heapifyCompleted) {
        heapifyCompleted = true;
        for (let i = this._elements.length; i > 0; i--) {
          if (this._elements[i] > this._elements[this._parentIndex(i)]) {
            this._swap(i, this._parentIndex(i));
            heapifyCompleted = false;
          }
        }
      }
    } else if (this._heapType === "min") {
      let heapifyCompleted = false;
      while (!heapifyCompleted) {
        heapifyCompleted = true;
        for (let i = this._elements.length; i > 0; i--) {
          if (this._elements[i] < this._elements[this._parentIndex(i)]) {
            this._swap(i, this._parentIndex(i));
            heapifyCompleted = false;
          }
        }
      }
    }
  };

  Heap.prototype.push = function (newElement) {
    this._elements.push(newElement);
    this._heapify();
  };

  Heap.prototype.pushMany = function (newElements) {
    for (let i = 0; i < newElements.length; i++) {
      this.push(newElements[i]);
    }
  };

  Heap.prototype.pop = function () {
    let topElement = this._elements[0];
    this._elements[0] = this._elements[this._elements.length - 1];
    this._elements = this._elements.slice(0, this._elements.length - 2);
    return topElement;
  };

  return Heap;
})();
S;
