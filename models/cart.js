const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Cart = Sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Cart

//VEStIGAL 
//const fs = require('fs')
// const path = require('path')

// const p = path.join(
//     path.dirname(process.mainModule.filename), 
//     'data', 
//     'cart.json'
// )

// module.exports = class Cart {
//     static addProduct(id, prodPrice){
//         fs.readFile(p, (err, fileContent) => {
//             let cart = {products: [], totalPrice: 0}
//             if (!err){
//                 cart = JSON.parse(fileContent)
//             }
//             const curProdInd = cart.products.findIndex(prod => prod.id == id)
//             const curProd = cart.products[curProdInd]
//             let updatedProd 
//             if (curProd){
//                 updatedProd = {...curProd}
//                 updatedProd.qty = updatedProd.qty + 1
//                 cart.products[curProdInd] = updatedProd
//             } else {
//                 updatedProd = {id: id, qty: 1}
//                 cart.products = [...cart.products, updatedProd]
//             }
//             cart.totalPrice = cart.totalPrice + +prodPrice
//             fs.writeFile(p, JSON.stringify(cart), err => {
//                 console.log(err)
//             })
//         })
//     }
//     static deleteProd(id, prodPrice){
//         fs.readFile( p, (err, fileContent) => {
//             if(err){
//                 return
//             } 
//             const updatedCart = {...JSON.parse(fileContent)}
//             const product = updatedCart.products.find(prod=> prod.id = id)
//             if(!product){
//                 return
//             }
//             updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
//             updatedCart.totalPrice = updatedCart.totalPrice - prodPrice *  product.qty

//             fs.writeFile(p, JSON.stringify(updatedCart), err => {
//                 console.log(err)
//             })
//         })
//     }

//     static getCart(cb){
//         fs.readFile(p, (err, fileContent) => {
//             const cart = JSON.parse(fileContent)
//             if(err){
//                 cb(null)
//             } else {
//                 cb(cart)
//             }
//         })
//     }

// }