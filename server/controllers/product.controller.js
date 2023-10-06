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
            .then(newProduct => {res.status(200).json(newProduct)})
            .catch(err => {res.status(500).json(err), console.log(err)}) 
    },
    getOneProduct: (req, res) => {
        console.log(req.params.id)
        Product.findOne({_id: req.params.id})
            .then(oneProduct => res.json(oneProduct))
            .catch(err => {res.json("cant get one", err)})
    },
    updateOneProduct: (req, res) => {
        console.log("hello", req.body)
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
            .then(updateOne => res.status(200).json(updateOne))
            .catch(err => { res.status(500).json(err), console.log(err)} )
    },
    deleteOneProduct: (req, res) => {
        console.log(req.params.id)
        Product.deleteOne({_id: req.params.id})
            .then(deleteProduct => res.json(deleteProduct))
            .catch(err => console.log(err))
    }
}