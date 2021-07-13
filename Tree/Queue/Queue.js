const LinkedList = require("../2linkedList/2linkedList");

class Queue {
  constructor() {
    this.data = new LinkedList()
    this.size = 0
  }

  enqueue(value) {
    this.data.insertBack(value)
    this.size++
  }

  dequeue() {
    let element
    if (this.data.head !== null) {
      element = this.data.head.data
      this.data.removeFront()
      this.size--
    }

    return element
  }
}

module.exports = Queue