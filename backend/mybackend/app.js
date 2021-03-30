var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var productsRouter = require('./routes/products');
const mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost:27017/mydb' , 
{ useNewUrlParser: true, 
  useUnifiedTopology: true 
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/products', productsRouter);

module.exports = app;
