const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')

const shopControl = require('../controllers/shop')

router.get('/', shopControl.getShopBase)
router.get('/go-kart', shopControl.getShopKart)
router.get('/orders', shopControl.getOrders)

router.get('/all-prods', shopControl.getShopProds)
router.get('/all-prods/:prodId', shopControl.getProdDetail)

router.get('/checkout', shopControl.getCheckout)

module.exports = router


//vestigal

// const adminData = require('./admin')
// const prodControl = require('../controllers/products')
// router.get('/hi', (req, res, next) => {
//     res.send('<h1>how am i here</h1>')
// })