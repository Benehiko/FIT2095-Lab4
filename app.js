var express = require('express');
var indexRouter = require('./routes/index.js');
var bodyParser = require('body-parser');
var path=require('path');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('views'));
app.use(express.static('public/images'));
app.use(express.static('bower_components'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRouter);
app.listen("8080");
console.log("Server running at http://localhost:8080");