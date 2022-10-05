const http = require('http')  
const { parse } = require('path')

const routes = require('./routes')

const serve = http.createServer()

serve.listen(3000)