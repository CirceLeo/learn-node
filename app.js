const http = require('http')  
const express = require('express')
const parser = require('body-parser')
const errorCon = require('./controllers/other')
// const {parse} = require('path')

const path = require('path')
const routes = require('./routes')

const app = express()

app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

// app.set('views', 'views')

const adminData = require('./routes/admin')
const shipRoutes = require('./routes/ship')

app.use(parser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shipRoutes)

app.use(errorCon.getLost)


app.listen(3000)



//learning vestiges: 
// app.engine('handlebars', expressHbs())
// app.set('view engine', 'handlebars')
// app.engine('pug', require('pug').__express)
// app.set('view engine', 'pug')
// const expressHbs = require('express-handlebars')
// res.status(404).sendFile(path.join(__dirname, 'views', '404pg.html'))