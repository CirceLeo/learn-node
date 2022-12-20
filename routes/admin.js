const express = require('express')
const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

const products = []

// /admin/new-fun => GET
router.get('/new-fun', (req, res, next) => {
    res.render('more-prod', {pageTitle: 'pls add more products', path: 'admin/new-fun'})
    // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
})
router.post('/new-fun', (req, res, next) => {
    products.push({title: req.body.prod_tit})
    res.redirect('/')
})

// module.exports = router
exports.products = products
exports.routes = router