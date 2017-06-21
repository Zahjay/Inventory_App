const express = require('express');
const controller = require ('../controllers/productsController');
 
 const productRoutes = express.Router();
productRoutes.get('/', controller.index);
productRoutes.get('/add', controller.new);

productRoutes.get('/edit/:id',controller.edit);
productRoutes.get('/:id',controller.show);
productRoutes.post('/',controller.create);
productRoutes.put('/:id',controller.update);
productRoutes.delete('/:id', controller.destroy);

module.exports = productRoutes;
