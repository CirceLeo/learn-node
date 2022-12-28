const exp = require('constants')
const { redirect } = require('express/lib/response')
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

exports.postShopKart = (req, res, next) => {
    const prodId = req.body.prodId
    Product.findById()
    res.redirect('/')
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
    Product.findById(prodId, product => {
        res.render('shop/prod-deets', {prod: product, pageTitle: product.title, path:'/all-prods'})
    })
    
}

exports.getCheckout = (req, res, next) => {
    res.render('shop.checkout', {
        path: '/checkout',
        pageTitle: 'checkout'
    })
}