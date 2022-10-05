const fs = require('fs') 

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Hi</title></head>')
        res.write('<body style="background-color:blue"><h1 style="color:red">claire i love you</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</botton></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsed = Buffer.concat(body).toString()
            const message = parsed.split('=')[1]
            fs.writeFile('message.txt', 'I love you shrek ' + message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Hi</title></head>')
    res.write('<body style="background-color:blue"><h1>wow it me</h1></body>')
    res.write('</html>')
}

module.exports = requestHandler