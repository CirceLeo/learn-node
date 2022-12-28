const express = require('express')
const path = require('path')

const prodControl = require('../controllers/products')

const rootDir = require('../helpers/path')

const router = express.Router()

// /admin/new-fun => GET
router.get('/new-fun', prodControl.getAddProd)

// /admin/new-fun => POST
router.post('/new-fun', prodControl.postAddProd)

// /admin/prods => GET
router.get('/prods', prodControl.getAdminProds)

// /admin/prods/:prodId
router.get('/edit-prod/:prodId', prodControl.getEditProd)
router.post('/edit-prod', prodControl.postEditProd)


exports.routes = router


// module.exports = router
// exports.products = products