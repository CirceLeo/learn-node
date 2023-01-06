const express = require('express')
const path = require('path')
const parser = require('body-parser')

const errorCon = require('./controllers/other')
const sequelize = require('./util/database')
const Product = require('./models/product')
const User = require('./models/user')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')

const app = express()

app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

const adminData = require('./routes/admin')
const shipRoutes = require('./routes/ship')
const { use } = require('express/lib/router')
const { moveMessagePortToContext } = require('worker_threads')

app.use((req, res, next) => {
    User.findById(1).then(user => {
        req.user = user
        next()
    }).catch(err => console.log('app,js user middleware', err))
})

app.use(parser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shipRoutes)

app.use(errorCon.getLost)


Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})

sequelize.sync()
    .then(result => {
        return User.findById(1)
        // console.log(result)
    }).then(user => {
        if(!user){
            return User.create({name:'margot', email:"margot@margot.org" })
        }
        return Promise.resolve(user)
    }).then(user => {
        return user.createCart()
    }).then((cart)=>app.listen(3000))
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