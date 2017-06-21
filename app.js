const express = require('express');
const path = require('path');
const logger = require ('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express ();
const productsRoutes = require('./routes/products');

const PORT= process.env.PORT || 3000;
//This is the foundation for listening port.

//This works too, but shows onscreen
// app.listen(PORT);

app.listen(PORT, function(){
console.log(`express-products app is running {port}...`);
});

//These set the link the views and enable us to see the info. 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//Test: this should only show on the index page.
app.get ('/',function(req,res){
res.render('index', {
  documentTitle: 'Welcome To Our Site!',
   message:'Rated Best Business In Queens!',
   subTitle: 'This is how we stay organized.',
  //  productsData:products,
  //  subTitle:'Rated By the People Best Health & Beauty Store in Queens.'
  showMore: true,
  productsNames: ['BlackSeed', 'Egyptian Musk', 'Volcanic'],

   });
});

app.use('/products', productsRoutes );


app.get('*', function(req, res) {
  res.status(404).send({message: 'Figured you out'});
});


