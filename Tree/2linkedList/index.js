const LinkedList = require('./2linkedList')

let a = new LinkedList()

a.insertBack(0)
a.insertBack(1)
a.insertBack(2)
a.insertBack(3)
a.insertBack(4)
a.insertBack(5)

a.insertIn(4, 10)

// let curr = a.head
// while (curr !== null) {
//   console.log(curr.data)

//   curr = curr.next
// }

// let current = a.tail
// while (current !== null) {
//   console.log(current.data)

//   current = current.prev
// }

a.removeIn(6)

let curr2 = a.head
while (curr2 !== null) {
  console.log(curr2.data)

  curr2 = curr2.next
}

let current2 = a.tail
while (current2 !== null) {
  console.log(current2.data)

  current2 = current2.prev
}
