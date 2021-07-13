// let tree = {
//   node: 'A', children: [
//     {
//       node: 'B', children: [
//         { node: 'G', children: [] }, { node: 'H', children: [] }, { node: 'I', children: [] }, { node: 'K', children: [] }
//       ]
//     },
//     {
//       node: 'C', children: []
//     },
//     {
//       node: 'D', children: []
//     },
//     {
//       node: 'E', children: [
//         { node: 'L', children: [] },
//         { node: 'M', children: [] },
//         { node: 'N', children: [] },
//         {
//           node: 'O', children: [
//             { node: 'P', children: [] },
//             { node: 'Q', children: [] },
//             { node: 'R', children: [] },
//             { node: 'S', children: [] }
//           ]
//         },
//       ]
//     },
//     {
//       node: 'F', children: []
//     }
//   ]
// }

// console.log(tree)

const Tree = require('./Tree')

let t = new Tree()

t.add('A', null)
t.add('B', 'A')
t.add('C', 'A')
t.add('D', 'A')
t.add('E', 'A')
t.add('F', 'A')
t.add('G', 'B')
t.add('H', 'B')
t.add('I', 'B')
t.add('J', 'B')
t.add('K', 'B')
t.add('L', 'E')
t.add('M', 'E')
t.add('N', 'E')
t.add('O', 'E')
t.add('P', 'O')
t.add('Q', 'O')
t.add('R', 'O')
t.add('S', 'O')


console.log(t.root)

console.log(t.BFS())

console.log(t.DFS())