exports.getShopBase = (req, res, next) => {
    res.render('/', {
        pageTitle: 'Howdy folks', 
        path: '/'})
}

exports.getShopKart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Girlie look at the stuff you got', 
        path: '/go-kart'})
}