const Node = require("./TreeNode");

class Tree {
  constructor() {
    this.root = null;
  }

  addValue(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this.root.addNode(val);
    }
  };

  traverse(){
    this.root.visit();
  }

}

module.exports = Tree;
