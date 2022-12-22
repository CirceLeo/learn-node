const prods = []


exports.getAddProd = (req, res, next) => {
    res.render('more-prod', {
        pageTitle: 'Pls add more products', 
        path: '/admin/new-fun'})
    // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
}

exports.postAddProd = (req, res, next) => {
    prods.push({title: req.body.prod_tit})
    res.redirect('/')
}

exports.getShop = (req, res, next) => {
    res.render('shop', {
        prods: prods, 
        pageTitle: 'shop', 
        path: '/', 
        hasProducts: prods.length > 0})
    // res.render('shop', {prods: prods, pageTitle: 'shop', path: '/'})
    // res.sendFile(path.join(rootDir, 'views', 'base.html'))
}
