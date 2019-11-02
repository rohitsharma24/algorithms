class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addNode(val) {
    if (val < this.value) {
      if (this.left === null) {
        this.left = new TreeNode(val);
      } else {
        this.left.addNode(val);
      }
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = new TreeNode(val);
      } else {
        this.right.addNode(val);
      }
    }
  }
  visit() {
    if(this.left !== null){
      this.left.visit();
    }
    console.log(this.value);
    if(this.right !== null){
      this.right.visit();
    }
  }
}

module.exports = TreeNode;
