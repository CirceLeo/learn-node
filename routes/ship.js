const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/hi', (req, res, next) => {
    res.send('<h1>how am i here</h1>')
})


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'base.html'))
})

module.exports = router