const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')

const adminData = require('./admin')
const prodControl = require('../controllers/products')
const shopControl = require('../controllers/shop')


router.get('/hi', (req, res, next) => {
    res.send('<h1>how am i here</h1>')
})


router.get('/', shopControl.getShopBase)
router.get('/go-kart', shopControl.getShopKart)

router.get('/all-prods', prodControl.getShopProds)

module.exports = router