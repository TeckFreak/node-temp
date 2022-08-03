const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',`${first},${second}`,'utf-8',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            readFile('./content/result-async.txt','utf-8',(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log("task done")
                console.log(`The final Result is :${result}`)
            })
        })
    })
})

console.log('starting new task')


