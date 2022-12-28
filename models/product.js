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
    constructor(id, inputTitle, imgUrl, desc, price){
        this.id = id
        this.title = inputTitle
        this.imgUrl = imgUrl
        this.desc = desc
        this.price = price
    }

    save(){
        getProdFromFile(products => {
            if(this.id){
                const oldProdInd =  products.findIndex(prod => prod.id === this.id)
                const updatedProds = [...products]
                updatedProds[oldProdInd] = this
                fs.writeFile(p, JSON.stringify(updatedProds), (err) =>{
                    console.log(err)
                })
            } else {
                this.id = Math.random().toString()
                prods.push(this)
                fs.writeFile(p, JSON.stringify(prods), (err) =>{
                    console.log(err)
                })
            }
        })
    }

    static fetchAll(callBack){
        getProdFromFile(callBack)
    }

    static findById(id, callback){
        getProdFromFile(prods => {
            const product = prods.find(p => p.id = id)
            callback(product)
        })
    }
}