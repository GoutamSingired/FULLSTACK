const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, "Title should be mentioned"],
            minlength: [4, "Title should be min 4 chars"]
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: [100, 'Price should be more than 100 dollars']
        },
        description: {
            type: String,
            required: [true, "Please give the description"],
            minlength: [10, "Desc should be 10"]
        }
    },{ timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product