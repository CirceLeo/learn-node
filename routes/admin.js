const express = require('express')
const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()
router.get('/new-fun', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'moar.html'))
})
router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router