//npm - Global comman, comes with node 
// npm --version

//local dependecny - use it only in our project
//npm i <packageName>

//global dependency -use it in any projects
// npm install -g <packageName>
// sudo npm install - g <packageName>  (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step process, press enter to skip)
// npm init -y (everything default)

const loadshV = require('loadsh')
const items = [1,[2,[3,[4]]]]
const newItem = loadshV.flattenDeep(items)
console.log(newItem);