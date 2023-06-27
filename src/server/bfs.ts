class Node_ {
  public data: string;
  public edges: Map<Node_, number>;

  constructor(data: string) {
    this.data = data;
    this.edges = new Map<Node_, number>();
  }

  addEdge(node: Node_, distance: number) {
    this.edges.set(node, distance);
  }
}

class Graph {
  public nodes: Node_[];

  constructor(nodes: Node_[]) {
    this.nodes = nodes;
  }

  public addNode(node: Node_) {
    this.nodes.push(node);
  }

  // dijkstra's shortest path
  dsp(source: Node_, destination: string): Map<Node_, number> {
    const MAX = Math.pow(2, 32);
    const distances = new Map<Node_, number>();
    const visited = [] as Node_[];

    const queue = [];

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i] as Node_;
      distances.set(node, MAX);
    }
    distances.set(source, 0);
    queue.push(source);

    while (queue.length !== 0) {
      const visiting = queue.shift() as Node_;
      const distance = distances.get(visiting);
      const adjList = visiting.edges?.keys();
      if (adjList) {
        for (const s of adjList) {
          if (!visited.includes(s)) {
            queue.push(s);
          }
          const tentative = visiting.edges?.get(s);
          const weight = distances.get(s);
          if (
            distance !== undefined &&
            weight !== undefined &&
            tentative !== undefined &&
            distance + tentative < weight
          ) {
            distances.set(s, distance + tentative);
          }
          visited.push(s);
        }
      }
      if (visiting.data === destination) {
        console.log("FOUND");
        break;
      }
    }
    return distances;
  }
}

export default function Dijkstra() {
  console.log("DIJKSTRA:");

  const graph = new Graph([]);
  const b = new Node_("b");
  const a = new Node_("a");
  const c = new Node_("c");
  const d = new Node_("d");
  const e = new Node_("e");
  const f = new Node_("f");
  b.addEdge(a, 3);
  b.addEdge(c, 5);
  a.addEdge(c, 1);
  c.addEdge(d, 2);
  c.addEdge(e, 4);
  d.addEdge(f, 5);
  d.addEdge(a, 5);
  e.addEdge(f, 1);
  graph.addNode(a);
  graph.addNode(b);
  graph.addNode(c);
  graph.addNode(d);
  graph.addNode(e);
  graph.addNode(f);

  const distances = graph.dsp(b, "f");
  console.log(distances);
}
