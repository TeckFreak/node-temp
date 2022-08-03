const http = require('http')

const server = http.createServer((req,res) => {
//res.write("Welcome to our home page")
if(req.url === '/') {
 res.end(` <p>This is Home page </p>
  <a href = '/about'>About Page</a> `)
}else if(req.url==='/about'){
    res.end('This is About page')
}else {
    res.end(`
    <h1> Oops! </h1>
    <p> We can't find the page you are looking for!</p>
    <a href = '/'> back home </a>
    `)  
}
})

server.listen(5000)