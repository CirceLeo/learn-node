const prods = []

module.exports = class Product {
    constructor(inputTitle){
        this.title = inputTitle
    }

    save(){
        prods.push(this)
    }

    static fetchAll(){
        return prods
    }
}