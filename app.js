const http = require('http')  
const { parse } = require('path')

const routes = require('./routes')

const serve = http.createServer(routes)

serve.listen(3000)