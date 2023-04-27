var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require("fs");
const { parse } = require("csv-parse");

const { transformDataForRedis } = require('./utils/transformDataForRedis');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require('./routes/products');
const { initServer } = require('./utils/initServer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let allProducts = [];

fs.createReadStream("./data/products.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    allProducts.push(row);
  })
  .on("end", function () {
    const productsData = transformDataForRedis(allProducts)
    initServer(productsData);
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
