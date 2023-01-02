const Cart = require('./cart')
const db = require('../util/database')

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
        db.execute(
            'INSERT INTO products (title, price, imgUrl, desc) VALUES (?,?,?,?)',
            [this.title, this.price, this.imgUrl, this.desc]
            )
    }

    static deleteById(id){
    }

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    }

    static findById(id, callback){

    }
}



/** VESTIGAL
 * module.exports = path.dirname(process.mainModule.filename)

 * const fs = require('fs')
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

                    save(){
        getProdFromFile(products => {
            if(this.id !== null){
                const oldProdInd =  products.findIndex(prod => prod.id === this.id)
                const updatedProds = [...products]
                updatedProds[oldProdInd] = this
                fs.writeFile(p, JSON.stringify(updatedProds), (err) =>{
                    console.log(err)
                })
            } else {
                this.id = Math.random().toString()
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err) =>{
                    console.log(err)
                })
            }
        })
    }

    
    static deleteById(id){
        getProdFromFile(prods => {
            const toBeDeleted = prods.find( prod => prod.id === id)
            const updatedProds = prods.filter(prod => prod.id !== id)
            fs.writeFile(p, JSON.stringify(updatedProds), err => {
                if(!err){Cart.deleteProd(id, toBeDeleted.price)}
            })
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
 * 
 */