const http = require('http')  
const express = require('express')
const parser = require('body-parser')
const path = require('path')

const routes = require('./routes')

const app = express()

const adminRoutes = require('./routes/admin')
const shipRoutes = require('./routes/ship')

app.use(parser.urlencoded({extended:false}))
app.use('/admin', adminRoutes)
app.use(shipRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404pg.html'))
})


app.listen(3000)