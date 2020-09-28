const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const ProductController = require('./controllers/productDetails.controller'); 
const productDetails = new ProductController();

var app = express();

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', hbs);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets',express.static(__dirname + '/public'));

//CRUD operations for product
app.get('/getProductDetails', productDetails.getAllProductDetails);
app.put('/updateProductAvailability', productDetails.updateProductAvailibility);
app.post('/addNewProduct', productDetails.addProductByCategory);
app.delete('/deleteProduct/:product_name', productDetails.deleteProduct);

//get api for product and category using pagination.
app.get('/getProductByCategory/', productDetails.getProductByCategory);

//CRUD operations for Category
app.get('/getCategoryDetails', productDetails.getAllCategoryDetails);
app.put('/updateCategoryName', productDetails.updateCategoryName);
app.post('/addNewCategory', productDetails.addNewCategory);

app.listen(8000);
console.log("port is listening on 8000");

module.exports = app;
