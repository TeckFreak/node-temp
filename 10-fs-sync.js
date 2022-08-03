const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//console.log(first,second)

const syncFile = writeFileSync('./content/result-sync.txt',`Sync Result : ${first}, ${second}`)
console.log(readFileSync('./content/result-sync.txt','utf-8'))

console.log('done with the task')
console.log('starting the next one')

