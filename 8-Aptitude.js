//CommonJs - Every file is a module by default
//Modules - Encapsulated Code (Share minumum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate_module')
const mind = require('./7-mind_module')
// require('./7-mind_module')
// console.log(data)
// console.log(names)

// sayHi ('Susan')
// sayHi(names.a)
// sayHi(names.b)
// data.printStar(6)
// data.printPyramid(5)
//console.log (mind.printPyramid(5))
console.log (mind.funny(10))