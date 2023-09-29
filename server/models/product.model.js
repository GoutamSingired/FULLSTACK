const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String
    
        },
        price: {
            type: String
            //required: [true, "Price should be mentioned"]
        },
        description: {
            type: String
            //required: [true, "please give the description"]
        }
    },
    { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product