const Tree = require("./Tree");

const tree = new Tree();

for (let i = 0; i < 10; i++) {
  tree.addValue(Math.floor(Math.random()*100));
}

tree.traverse();
