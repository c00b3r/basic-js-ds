const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = [];
  }

  root() {
    if (this.tree[0]) {
      return this.tree[0];
    }
    return null;
  }

  add(data) {
    if (this.tree.length === 0) {
      this.tree.push({
        data: data,
      });
      return;
    }
    for (let i = 0; i < this.tree.length; i++) {
      if (!this.tree[i].right && this.tree[i].data < data) {
        this.tree[i].right = data;
      } else if (!this.tree[i].left && this.tree[i].data > data) {
        this.tree[i].left = data;
      }
    }
    this.tree.push({
      data: data,
    });
  }

  has(data) {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].data === data) {
        return true;
      }
    }
    return false;
  }

  find(data) {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].data === data) {
        return this.tree[i];
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
