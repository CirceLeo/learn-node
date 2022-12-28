const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('admin/more-prod', {
        pageTitle: 'Pls add more products', 
        path: '/admin/new-fun'})
}

exports.postAddProd = (req, res, next) => {
    const title = req.body.prod_tit
    const imgUrl = req.body.imgUrl
    const price = req.body.price
    const desc = req.body.desc
    const localProd = new Product(title, imgUrl, desc, price)
    localProd.save()
    res.redirect('/admin/prods')
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
        // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
