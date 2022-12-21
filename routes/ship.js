const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')

const adminData = require('./admin')


router.get('/hi', (req, res, next) => {
    res.send('<h1>how am i here</h1>')
})


router.get('/', (req, res, next) => {
    const prods = adminData.products
    res.render('shop', {prods: prods, pageTitle: 'shop', path: '/', hasProducts: prods.length > 0})
    // res.render('shop', {prods: prods, pageTitle: 'shop', path: '/'})
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'base.html'))
})

module.exports = router