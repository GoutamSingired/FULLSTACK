const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/products', ProductController.getAllProducts);
    app.post('/product/new', ProductController.createProducts);
    app.get('/products/:id', ProductController.getOneProduct);
    app.patch('/products/:id', ProductController.updateOneProduct);
    app.delete('/products/:id', ProductController.deleteOneProduct);
}