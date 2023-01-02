const exp = require('constants')
const { redirect } = require('express/lib/response')
const Product = require('../models/product')
const Cart = require('../models/cart')


exports.getShopBase = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, info]) => {
        res.render('shop/start', {
            prods: rows, 
            pageTitle: 'Howdy folks', 
            path: '/', 
        })
    })
    .catch(err => console.log('error in shop controller get shop base catch', err))
}

exports.getShopKart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProds = []
            for(product of products){
                const cartProdData = cart.products.find(prod => prod.id === product.id)
                if(cartProdData){
                    cartProds.push({productData: product, qty: cartProdData.qty})
                }
            }
            res.render('shop/cart', {
                pageTitle: 'Girlie look at the stuff you got', 
                path: '/go-kart',
                products: cartProds
            })
        })
    })
}

exports.postShopKart = (req, res, next) => {
    const prodId = req.body.prodId
    Product.findById(prodId, (prod) => {
        Cart.addProduct(prodId, prod.price)
    })
    res.redirect('/go-kart')
}

exports.postCartDeleteItem = (req, res, next) => {
    const prodId = req.body.prodId
    Product.findById(prodId, product => {
        Cart.deleteProd(prodId, product.price)
        res.redirect('/go-kart')
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'alll them ords', 
        path: '/orders'})
}


exports.getShopProds = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, info]) => {
        res.render('shop/prod-list', {
            prods: prods, 
            pageTitle: 'shop all', 
            path: '/all-prods', 
        })
    })
    .catch(err => console.log('error in shop controller get all prods catch', err))
}

exports.getProdDetail= (req, res, next) => {
    const prodId = req.params.prodId
    Product.findById(prodId).then(([product]) => {
        res.render(
            'shop/prod-deets', 
            {
                prod: product[0], 
                pageTitle: product.title, 
                path:'/all-prods'
            })
    }).catch()
    
}

exports.getCheckout = (req, res, next) => {
    res.render('shop.checkout', {
        path: '/checkout',
        pageTitle: 'checkout'
    })
}