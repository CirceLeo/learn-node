const express = require('express')
const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

const products = []

router.get('/new-fun', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'moar.html'))
})
router.post('/product', (req, res, next) => {
    products.push({title: req.body.prod_tit})
    res.redirect('/')
})

// module.exports = router
exports.products = products
exports.routes = router