exports.getLost = (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'where are you', path: '/404'})
}