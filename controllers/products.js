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
    Product.create({
        title: title,  
        price: price,
        desc: desc,
        imgUrl: imgUrl
    }).then(res => {
        console.log('made a prod')
        res.redirect('admin/prods')
    }).catch(err=>console.log(err))
}

exports.getEditProd = (req, res, next) => {
    const editMode = req.query.edit

    if (!editMode){res.redirect('/admin/prods')}

    const prodId = req.params.prodId
    Product.findById(prodId)
    .then(product => {
        if(!product){
            return res.redirect('/admin/all-prods')
        }
        res.render('admin/edit-prod', {
            pageTitle: 'we gonna change this one', 
            path: '/admin/edit-prod',
            editing: editMode, //== 'true',
            prod: product
        })
    }).catch(err => console.log('err fetching edit prod from products cont', err))
}


exports.postEditProd = (req, res, next) => {
    const prodId = req.body.prodId
    const newTit = req.body.prod_tit
    const newUrl = req.body.imgUrl
    const newPrice = req.body.price
    const newDesc = req.body.desc

    // const revampProd = new Product(prodId, newTit, newUrl, newDesc, newPrice)
    Product.findById(prodId)
        .then(prod => {
            prod.title = newTit
            prod.imgUrl = newUrl
            prod.price = newPrice
            prod.desc = newDesc
            prod.save()
        })
        .then(res => {
            console.log('prod updated')
            res.redirect('/admin/prods')
        })
        .catch(err => console.log('posting edit from prod con', err))
    res.redirect('/admin/prods')
}


exports.getAdminProds = (req, res, next) => {
    Product.findAll()
    .then(prods => {
        res.render('admin/admin-prods', {
            prods: prods, 
            pageTitle: 'here are all the products for admins', 
            path: '/admin/prods'
        })
    })
    .catch(err => console.log('error in prod controller get admin prods catch', err))    
}

exports.postDelete = (req, res, next) => {
    const prodId = req.body.prodId
    Product.findById(prodId)
        .then(prod => prod.destroy()).then(()=> {
            console.log('i destroyed somethuing')
            res.redirect('admin/prods')
        })
        .catch(err => console.log('post delete prod con', err))
    res.redirect('/admin/prods')
}



    //vestigal code
    // res.render('shop', {prods: prods, pageTitle: 'shop', path: '/'})
    // res.sendFile(path.join(rootDir, 'views', 'base.html'))
        // res.sendFile(path.join(rootDir, 'views', 'moar.html'))
        
    // const localProd = new Product(null, title, imgUrl, desc, price)
    // localProd.save()
    //     .then(() => {
    //         res.redirect('/')
    //     })
    //     .catch(err => console.log(err))
    // res.redirect('/admin/prods')
