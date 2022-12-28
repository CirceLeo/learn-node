const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'cart.json'
)

module.exports = class Cart {
    static addProduct(id, prodPrice){
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if (!err){
                cart = JSON.parse(fileContent)
            }
            const curProdInd = cart.products.findIndex(prod => prod.id == id)
            const curProd = cart.products[curProdInd]
            let updatedProd 
            if (curProd){
                updatedProd = {...curProd}
                updatedProd.qty = updatedProd.qty + 1
                cart.products[curProdInd] = updatedProd
            } else {
                updatedProd = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProd]
            }
            cart.totalPrice = cart.totalPrice + +prodPrice
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })
        })

    }


}