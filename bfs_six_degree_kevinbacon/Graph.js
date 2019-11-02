const GraphNode = require("./GraphNode");

class Graph {
  constructor() {
    this.graph = {};
  }
  reset() {
    for (let k in this.graph) {
      this.graph[k].searched = false;
    }
  }
  addNode(v) {
    const node = new GraphNode(v);
    this.graph[v] = node;
    return node;
  }
  getNode(v) {
    return this.graph[v];
  }
}

module.exports = Graph;
