module.exports = (function () {
  // NODE CONSTRUCTOR //
  function Node(value) {
    this._value = value;
    this._left = null;
    this._right = null;
  }
  Node.prototype.getValue = function () {
    return this._value;
  };
  // LEFT CHILD //
  Node.prototype.getLeftChild = function () {
    return this._left;
  };
  Node.prototype.setLeftChild = function (childNode) {
    this._left = childNode;
  };
  Node.prototype.hasLeftChild = function () {
    if (this._left === null) {
      return false;
    } else {
      return true;
    }
  };
  // RIGHT CHILD //
  Node.prototype.getRightChild = function () {
    return this._right;
  };
  Node.prototype.setRightChild = function (childNode) {
    this._right = childNode;
  };
  Node.prototype.hasRightChild = function () {
    if (this._right === null) {
      return false;
    } else {
      return true;
    }
  };
  // BINARY SEARCH TREE CONSTRUCTOR //
  function BST() {
    this._count = 0;
    this._root = null;
  }
  BST.prototype.insert = function (value) {
    this._count = this._count + 1;
    let newNode = new Node(value);
    // Check for a root node, if there isn't one create one
    if (this._root === null) {
      this._root = newNode;
      return;
    }
    // Loop condition
    let nodeInserted = false;
    // Start at root node
    let currentNode = this._root;
    while (!nodeInserted) {
      // Fist, is the key greater than the current node's key?
      if (value > currentNode.getValue()) {
        // If so, check for a right child
        if (currentNode.hasRightChild()) {
          // If so, set the current node to the right child
          currentNode = currentNode.getRightChild();
        } else {
          // Else, set the right child to a new node with the key and break the loop
          currentNode.setRightChild(newNode);
          nodeInserted = true;
        }
      } else {
        // If the key is less than the current node's key check for a left child
        if (currentNode.hasLeftChild()) {
          // If there is a left child set it as the current node
          currentNode = currentNode.getLeftChild();
        } else {
          // Else, insert a new node as the left child with the key. After break the loop
          currentNode.setLeftChild(newNode);
          nodeInserted = true;
        }
      }
    }
  };
  BST.prototype.inOrder = function () {
    let result = [];
    const traverse = (node) => {
      if (node.hasLeftChild()) {
        traverse(node.getLeftChild());
      }
      result.push(node.getValue());
      if (node.hasRightChild()) {
        traverse(node.getRightChild());
      }
      return;
    };
    traverse(this._root);
    return result;
  };
  BST.prototype.preOrder = function () {
    let result = [];
    const traverse = (node) => {
      result.push(node.getValue());
      if (node.hasLeftChild()) {
        traverse(node.getLeftChild());
      }
      if (node.hasRightChild()) {
        traverse(node.getRightChild());
      }
      return;
    };
    traverse(this._root);
    return result;
  };
  BST.prototype.postOrder = function () {
    let result = [];
    const traverse = (node) => {
      if (node.hasLeftChild()) {
        traverse(node.getLeftChild());
      }
      if (node.hasRightChild()) {
        traverse(node.getRightChild());
      }
      result.push(node.getValue());
      return;
    };
    traverse(this._root);
    return result;
  };
  return BST;
})();
