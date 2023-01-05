const express = require('express')
const path = require('path')
const parser = require('body-parser')

const errorCon = require('./controllers/other')
const sequelize = require('./util/database')

const app = express()

app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

const adminData = require('./routes/admin')
const shipRoutes = require('./routes/ship')

app.use(parser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shipRoutes)

app.use(errorCon.getLost)

sequelize.sync()
    .then(result => {
        // console.log(result)
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })




//learning vestiges: 
// const req = require('express/lib/request')
// const db = require('./util/database')
// const routes = require('./routes')
// const http = require('http')  
// const req = require('express/lib/request')
// const { deleteById } = require('./models/product')
// app.engine('handlebars', expressHbs())
// app.set('view engine', 'handlebars')
// app.engine('pug', require('pug').__express)
// app.set('view engine', 'pug')
// const expressHbs = require('express-handlebars')
// res.status(404).sendFile(path.join(__dirname, 'views', '404pg.html'))