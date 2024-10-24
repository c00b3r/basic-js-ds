const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addOnNode(this.rootNode, data);

    function addOnNode(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = addOnNode(node.left, data);
      } else if (data > node.data) {
        node.right = addOnNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return this._hasWithin(this.rootNode, data);
  }

  _hasWithin(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    }

    return data < node.data
      ? this._hasWithin(node.left, data)
      : this._hasWithin(node.right, data);
  }

  find(data) {
    return this._findWithin(this.rootNode, data);
  }

  _findWithin(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    return data < node.data
      ? this._findWithin(node.left, data)
      : this._findWithin(node.right, data);
  }

  remove(data) {
    this.rootNode = this._deleteWithin(this.rootNode, data);
  }

  _deleteWithin(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._deleteWithin(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._deleteWithin(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      let minFromRight = this._findMin(node.right);
      node.data = minFromRight.data;
      node.right = this._deleteWithin(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    return this._findMin(this.rootNode).data;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    return this._findMax(this.rootNode).data;
  }

  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
