const Product = require('../models/product.model')

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then(products => {res.json(products)})
            .catch(err => {res.json("not found products", err)})
    },

    createProducts: (req, res) => {
        console.log("body", req.body.newProduct)
        Product.create(req.body.newProduct)
            .then(newProduct => {res.json(newProduct)})
            .catch(err => {res.json("cant be created", err)}) 
    },
    getOneProduct: (req, res) => {
        console.log(req.params.id)
        Product.findOne({_id: req.params.id})
            .then(oneProduct => res.json(oneProduct))
            .catch(err => {res.json("cant get one", err)})
    }
    // deleteOneProduct: (req, res) => {
    //     console.log(req.params.id)
    //     Product.deleteOne({_id: req.params.id})
    //         .then(deleteOne => res.json(deleteOne))
    //         .catch(err => console.log(err))
    // }
}