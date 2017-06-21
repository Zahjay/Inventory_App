const pgp = require ('pg-promise')();

let db;
console.log('hello');
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  console.log('here')
  db = pgp ({
    database: 'product_development',
    port: 5432,
    host: 'localhost'
  });

} else if (process.env.NODE_ENV === 'production') {
  console.log('here')
  console.log("test:", process.env.DATABASE_URL)
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;