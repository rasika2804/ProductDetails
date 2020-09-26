const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const ProductController = require('./controllers/productDetails.controller'); 
const productDetails = new ProductController();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getProductDetails', productDetails.getAllProductDetails);
app.get('/getProductByCategory/:category', productDetails.getProductByCategory);
app.put('/updateProductAvailability', productDetails.updateProductAvailibility);
app.post('/addNewProduct', productDetails.addProductByCategory);
app.delete('/deleteProduct/:product_name', productDetails.deleteProduct);

app.listen(8000);
console.log("port is listening on 8000");

module.exports = app;
