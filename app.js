const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000);
console.log("port is listening on 8000");

module.exports = app;
