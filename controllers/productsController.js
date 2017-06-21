const Product = require('../models/product');
const controller = {};

controller.index = (req,res) => {
  Product.findAll()
  .then(products => {
    res.render('products/products-index', {
     documentTitle: 'P.Data',
     productsData: products
 
    });
  })
.catch(err => {
 res.status (400).json(err);
  });
};

controller.new = (req,res) => {
 Product.findAllCategories()
 .then(categories => {
    res.render('products/products-add',{
      documentTitle: 'categories',
      categoryData: categories
    });

})
.catch(err => {
 res.status (400).json(err);
  });
};

// controller.show = (req,res) => {
//   Product.findByID(req.params.id)
//   .then(product=> {
//     res.render('products/name-single')

//   });


controller.show = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      res.render('products/products-single', {
        documentTitle: 'Show!!',
        product: product
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};



controller.create = (req, res) => {
  Product.create({
      name: req.body.name,
      category_id: req.body.category_id,
      price: req.body.price,
      quantity:req.body.quantity,
      size_id:req.body.size_id,
      description:req.body.description

    })
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.edit = (req, res) => {
  // console.log('this is id from controller edit', req.params.id)
  Product.findById(req.params.id)
    .then(product => {
      // console.log(product);
      res.render('products/products-edit', {
        documentTitle: 'Business Beta',
        product: product
     
      });
    })
    .catch(err => {
      // console.log(err);
      res.status(400).json(err);
    });
};

controller.update = (req, res) => {
  // console.log(req.body, ' body from update');
  // console.log('hi');
  Product.update({
      name: req.body.name,
      category_id: req.body.category_id,
      price: req.body.price,
      quantity: req.body.quantity,
      size_id: req.body.size_id,
      description: req.body.description
    }, req.params.id)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
  Product.destroy(req.params.id)
    .then(() => {
      res.redirect('/products');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = controller;

