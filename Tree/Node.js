const LinkedList = require("./2linkedList/2linkedList");

class Node {
  constructor(data) {
    this.data = data
    // this.children = []
    this.children = new LinkedList();
  }
}

module.exports = Node