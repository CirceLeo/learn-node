const exp = require('constants')
const Product = require('../models/product')


exports.getShopBase = (req, res, next) => {
    Product.fetchAll((prods) => {
        res.render('shop/start', {
            prods: prods, 
            pageTitle: 'Howdy folks', 
            path: '/', 
        })
    })
}

exports.getShopKart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Girlie look at the stuff you got', 
        path: '/go-kart'})
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'alll them ords', 
        path: '/orders'})
}


exports.getShopProds = (req, res, next) => {
    Product.fetchAll((prods) => {
        res.render('shop/prod-list', {
            prods: prods, 
            pageTitle: 'shop all', 
            path: '/all-prods', 
        })
    })
}

exports.getProdDetail= (req, res, next) => {
    const prodId = req.params.prodId
    
}

exports.getCheckout = (req, res, next) => {
    res.render('shop.checkout', {
        path: '/checkout',
        pageTitle: 'checkout'
    })
}