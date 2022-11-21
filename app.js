const http = require('http')  
const express = require('express')
const parser = require('body-parser')
// const {parse} = require('path')

const path = require('path')
const routes = require('./routes')

const app = express()

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug')
// app.set('views', 'views')

const adminData = require('./routes/admin')
const shipRoutes = require('./routes/ship')

app.use(parser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shipRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404pg.html'))
})


app.listen(3000)