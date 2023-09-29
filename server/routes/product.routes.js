const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/products', ProductController.getAllProducts);
    app.post('/product/new', ProductController.createProducts);
}