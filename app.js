const http = require('http')  
const express = require('express')
const parser = require('body-parser')
const { parse } = require('path')

const routes = require('./routes')

const app = express()

app.use(parser.urlencoded({extended:false}))

app.use('/hi', (req, res, next) => {
    console.log("doing the thing")
    res.send('<h1>how im here</h1>')
})
app.use('/new-fun', (req, res, next) => {
    res.send('<form action="POST"><input type="text" name="newbie"><button type="sumbit">add a thing</button></form>')
})
app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>i did it</h1>')
})

app.listen(3000)