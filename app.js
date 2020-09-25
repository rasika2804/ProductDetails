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
app.post('/updateProductAvailability', productDetails.updateProductAvailibility);

app.listen(8000);
console.log("port is listening on 8000");

module.exports = app;
