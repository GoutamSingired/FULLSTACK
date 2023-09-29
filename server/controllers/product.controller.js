const Product = require('../models/product.model')

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then(products => {res.json(products)})
            .catch(err => {res.json("not found products", err)})
    },

    createProducts: (req, res) => {
        //console.log("body", req.body.newProduct)
        Product.create(req.body.newProduct)
            .then(newProduct => {res.json(newProduct)})
            .catch(err => {res.json("cant be created", err)}) 
    }

}