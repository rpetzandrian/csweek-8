const LinkedList = require("../2linkedList/2linkedList");

class Stack {
  constructor() {
    this.data = new LinkedList()
    this.size = 0
  }

  push(value) {
    this.data.insertFront(value)
    this.size++
  }

  pop() {
    let element
    if (this.data.head !== null) {
      element = this.data.head.data
      this.data.removeFront()
      this.size--
    }

    return element
  }
}

module.exports = Stack