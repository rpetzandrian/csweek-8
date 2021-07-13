const List = require('./list')

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  getFirst() {
    return this.head.data
  }

  getLast() {
    let curr = this.head
    if (curr) {
      while (curr.next) {
        curr = curr.next
      }
    }

    return curr.data
  }

  insertFront(data) {
    let newlist = new List(data)
    newlist.next = this.head

    if (this.head !== null) {
      this.head.prev = newlist
    }

    this.head = newlist

    if (this.tail === null) {
      this.tail = this.head
    }
    this.size++
  }

  removeFront() {
    if (this.head !== null) {
      let temp = this.head
      this.head = this.head.next

      if (this.head !== null) {
        this.head.prev = null
      } else {
        this.tail = null
      }

      this.size--
      temp.next = null
      return temp
    }
  }

  insertBack(data) {
    let newlist = new List(data)

    newlist.prev = this.tail

    if (this.tail !== null) {
      this.tail.next = newlist
    }

    this.tail = newlist

    if (this.head === null) {
      this.head = this.tail
    }

    this.size++
  }

  removeBack() {
    // if (this.head !== null) {
    //   let curr = this.head
    //   if (curr.next === null) {
    //     this.head = null
    //     this.size--
    //   } else {
    //     while (curr.next.next !== null) {
    //       curr = curr.next
    //     }
    //     curr.next = null
    //     this.size--
    //   }
    // }

    if (this.tail !== null) {
      let temp = this.tail
      this.tail = this.tail.prev

      if (this.tail !== null) {
        this.tail.next = null
      } else {
        this.head = null
      }

      this.size--
      temp.prev = null
      return temp
    }
  }

  insertIn(idx, data) {
    if (this.head === null && idx === 0) {
      this.insertFront(data)
    } else {
      if (idx > this.size) {
        return -1
      }
      // let curr = this.head
      // let i = 0
      // while (curr.next !== null && i < idx - 1) {
      //   curr = curr.next
      //   i++
      // }
      // if (curr.next !== null) {
      //   let newlist = new List(data)
      //   newlist.next = curr.next
      //   curr.next = newlist
      //   this.size++
      // }
      if (idx < (this.size / 2)) {
        let curr = this.head
        let i = 0
        while (curr.next !== null && i < idx - 1) {
          curr = curr.next
          i++
        }
        if (curr.next !== null) {
          let newlist = new List(data)
          curr.next.prev = newlist
          newlist.next = curr.next
          newlist.prev = curr
          curr.next = newlist
          this.size++
        }
      } else {
        let curr = this.tail
        let i = this.size - idx - 1
        while (curr.prev !== null && i > 0) {
          curr = curr.prev
          i--
        }
        if (curr.prev !== null) {
          let newlist = new List(data)
          curr.prev.next = newlist
          newlist.prev = curr.prev
          newlist.next = curr
          curr.prev = newlist
          this.size++
        }
      }
    }
  }

  removeIn(idx) {
    if (this.head !== null) {
      if (idx === 0) {
        this.removeFront()
      } else {
        if (idx < (this.size / 2)) {
          let curr = this.head
          let i = 0
          while (curr.next !== null && i < idx - 1) {
            curr = curr.next
            i++
          }
          if (curr.next !== null) {
            curr.next.next.prev = curr
            curr.next = curr.next.next
            this.size--
          }
        } else {
          if (idx === this.size - 1) {
            this.removeBack()
          } else {
            let curr = this.tail
            let i = this.size - idx - 1
            while (curr.prev !== null && i > 0) {
              curr = curr.prev
              i--
            }
            if (curr.prev !== null) {
              curr.next.prev = curr.prev
              curr.prev.next = curr.next
              this.size--
            }
          }
        }
      }
    }
  }
}

module.exports = LinkedList