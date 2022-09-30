const http = require('http')  
const fs = require('fs') 

// function requestListen(req, res){

// }

const serve = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Hi</title></head>')
        res.write('<body><h1 style="color:red">claire i love you</h1><form action="/message" method="POST"><input type="number"><button type="submit">submit</botton></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'I love you shrek')
        res.statusCode = 302
        res.setHeader('Location', '/')
        // res.write('<html>')
        // res.write('<head><title>Hi</title></head>')
        // res.write('<body><form action="/message" method="POST"><input type="text"><button>submit</botton></form></body>')
        // res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Hi</title></head>')
    res.write('<body><h1>wow it me</h1></body>')
    res.write('</html>')
    // res.write('')
})

serve.listen(3000)