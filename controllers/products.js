const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('more-prod', {
        pageTitle: 'Pls add more products', 
        path: '/admin/new-fun'})
    // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
}

exports.postAddProd = (req, res, next) => {
    const localProd = new Product(req.body.prod_tit)
    localProd.save()
    res.redirect('/')
}

exports.getShop = (req, res, next) => {
    Product.fetchAll((prods) => {
        res.render('shop', {
            prods: prods, 
            pageTitle: 'shop', 
            path: '/', 
            hasProducts: prods.length > 0
        })
    })
}


    //vestigal code
    // res.render('shop', {prods: prods, pageTitle: 'shop', path: '/'})
    // res.sendFile(path.join(rootDir, 'views', 'base.html'))