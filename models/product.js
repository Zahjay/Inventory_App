const db = require ('../db/config');

const Products = {};

Products.findAll = () => {
  return db.query('SELECT * FROM products ORDER BY id ASC');
};

//calls to database and returns result as promise
Products.findAllCategories = () => {
  return db.query('SELECT * FROM categories ORDER BY id ASC');
};

Products.findById = id => {
  return db.oneOrNone(
    'SELECT * FROM products WHERE id = $1', [id]);
};

Products.create = products => {
  return db.one(
  `
  INSERT INTO products
  (name,category_id,price,quantity,size_id,description)
  VALUES ($1,$2,$3,$4,$5,$6) RETURNING *
  `,
  [products.name, products.category_id,products.price, products.quantity,products.size_id,products.description]
  );
};

Products.update = (products,id) =>{
  console.log(products,id); 
return db.none(
`
      UPDATE products SET
      name = $1,
      category_id = $2,
      price = $3,
      quantity = $4,
      size_id = $5,
      description = $6
      WHERE id = $7
    `,
    [products.name, products.category_id, products.price, products.quantity, products.size_id, products.description, id]
  );
};


Products.destroy = id => {
  return db.none(
    `
      DELETE FROM products
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Products;