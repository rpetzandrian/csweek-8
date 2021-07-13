const Node = require("./Node")
const Queue = require("./Queue/Queue")
const Stack = require("./Stack/Stack")

class Tree {
  constructor() {
    this.root = null
  }

  add(value, parent) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      this.transversalAdd(value, parent)
    }
  }

  transversalAdd(value, parent) {
    if (!this.root) {
      return false
    }

    let q = new Queue()
    q.enqueue(this.root)

    while (q.size !== 0) {
      let curr = q.dequeue()

      if (curr.data === parent) {
        // curr.children = [...curr.children, new Node(value)]
        curr.children.insertFront(new Node(value))
      } else {

        // if (curr.children.length !== 0) {
        //   for (let i = 0; i < curr.children.length; i++) {
        //     q.enqueue(curr.children[i])
        //   }
        // }

        if (curr.children.size > 0) {
          let current = curr.children.head
          while (current !== null) {
            q.enqueue(current.data)
            current = current.next
          }
        }
      }
    }
  }

  BFS() {
    if (!this.root) {
      return false
    }

    let q = new Queue()
    let listNode = ''
    q.enqueue(this.root)

    while (q.size !== 0) {
      let curr = q.dequeue()
      listNode += curr.data

      // if (curr.children.length !== 0) {
      //   for (let i = 0; i < curr.children.length; i++) {
      //     q.enqueue(curr.children[i])
      //   }
      // }

      if (curr.children.size > 0) {
        let current = curr.children.tail
        while (current !== null) {
          q.enqueue(current.data)
          current = current.prev
        }
      }
    }

    return listNode
  }

  DFS() {
    if (!this.root) {
      return false
    }

    let s = new Stack()
    let listNode = ''
    s.push(this.root)

    while (s.size !== 0) {
      let curr = s.pop()
      listNode += curr.data

      // if (curr.children.length !== 0) {
      //   for (let i = curr.children.length - 1; i >= 0; i--) {
      //     s.push(curr.children[i])
      //   }
      // }

      if (curr.children.size > 0) {
        let current = curr.children.head
        while (current !== null) {
          s.push(current.data)
          current = current.next
        }
      }
    }

    return listNode
  }
}

module.exports = Tree