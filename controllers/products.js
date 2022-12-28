const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('admin/edit-prod', {
        pageTitle: 'Pls add more products', 
        path: '/admin/new-fun',
        editing: false
    })
}

exports.postAddProd = (req, res, next) => {
    const title = req.body.prod_tit
    const imgUrl = req.body.imgUrl
    const price = req.body.price
    const desc = req.body.desc
    const localProd = new Product(null, title, imgUrl, desc, price)
    localProd.save()
    res.redirect('/admin/prods')
}

exports.getEditProd = (req, res, next) => {
    const editMode = req.query.edit

    if (!editMode){res.redirect('/admin/prods')}

    const prodId = req.params.prodId
    Product.findById(prodId, product => {
        if(!product){
            return res.redirect('/admin/all-prods')
        }
        res.render('admin/edit-prod', {
            pageTitle: 'we gonna change this one', 
            path: '/admin/edit-prod',
            editing: editMode, //== 'true',
            prod: product
        })
    })
}


exports.postEditProd = (req, res, next) => {
    const prodId = req.body.prodId
    const newTit = req.body.prod_tit
    const newUrl = req.body.imgUrl
    const newPrice = req.body.price
    const newDesc = req.body.desc

    const revampProd = new Product(prodId, newTit, newUrl, newDesc, newPrice)
    revampProd.save()
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
