//const fs = require("fs").promises;

const movieData = require("./movies.json.js.js.js");
const Graph = require("./Graph");
const GraphNode = require("./GraphNode");

const graph = new Graph();

const init = () => {
  movieData.movies.map(movie => {
    const movieNode = graph.addNode(movie.title);
    movie.cast.map(actor => {
      let actorNode = graph.getNode(actor);
      if (!actorNode) {
        actorNode = graph.addNode(actor);
      }
      movieNode.addEdge(actorNode);
    });
  });
  //fs.writeFile("output.json", JSON.stringify(graph.graph, null, 2));
};
init();

const getPath = (start, end) => {
  graph.reset();
  let queue = [];
  const startNode = graph.getNode(start);
  const endNode = graph.getNode(end);
  if (startNode && endNode) {
    startNode.searched = true;
    queue.push(startNode);
    while (queue.length > 0) {
      var current = queue.shift();
      if (current === endNode) {
        break;
      }
      for (let i = 0; i < current.edges.length; i++) {
        let neighbour = current.edges[i];
        if (neighbour.searched) {
          continue;
        }
        neighbour.searched = true;
        neighbour.parent = current;
        queue.push(neighbour);
      }
    }
    if (endNode.parent) {
      let next = endNode,
        txt = "";
      let path = [];
      while (next) {
        path.push(next.value);
        next = next.parent;
      }
      for (let i = path.length - 1; i >= 0; i--) {
        txt += path[i];
        if (i != 0) {
          txt += " --> ";
        }
      }
      console.log(txt);
    } else {
      console.log("relation not found");
    }
  } else {
    console.log("Not found");
  }
};
getPath("Douglas Dirkson", "Julia Roberts");
