const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
)
const getProdFromFile = (callBack) => {
    fs.readFile(p, (err, content) => {
        if(err){
            return callBack([])
        }
        callBack(JSON.parse(content))
    })
}

module.exports = path.dirname(process.mainModule.filename)

const prods = []

module.exports = class Product {
    constructor(inputTitle, imgUrl, desc, price){
        this.title = inputTitle
        this.imgUrl = imgUrl
        this.desc = desc
        this.price = price
    }

    save(){
        getProdFromFile(prods => {
            prods.push(this)
            fs.writeFile(p, JSON.stringify(prods), (err) =>{
                console.log(err)
            })
        })
    }

    static fetchAll(callBack){
        getProdFromFile(callBack)
    }
}