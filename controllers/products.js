const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('admin/more-prod', {
        pageTitle: 'Pls add more products', 
        path: '/admin/new-fun'})
    // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
}

exports.postAddProd = (req, res, next) => {
    const localProd = new Product(req.body.prod_tit)
    localProd.save()
    res.redirect('/shop/cart')
}

exports.getAdminProds = (req, res, next) => {
    Product.fetchAll((prods) => {
        res.render('admin/admin-prods', {
            prods: prods, 
            pageTitle: 'here are all the products for admins', 
            path: '/admin/prods'})
        })        
}





    //vestigal code
    // res.render('shop', {prods: prods, pageTitle: 'shop', path: '/'})
    // res.sendFile(path.join(rootDir, 'views', 'base.html'))