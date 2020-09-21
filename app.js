var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var Cart = require('./models/cart');
var session = require("express-session");
var MongoStore = require('connect-mongodb-session')(session);
var product = require('./models/product');

var connectDB = require('./config/db');
var indexRouter = require('./routes/index');
var { mongo } = require('mongoose');

var app = express();

//connect database
connectDB();

app.use(session({
  secret: "This is secret bro!",
  resave: false,
  saveUninitialized: false,
  // store: new MongoStore({mongoConnection: mongo.connection}),
  cookie: { maxAge: 60 * 60 * 1000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.get("/add-to-cart/:id", function(req, res){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  product.findById(productId, function(err, product){
      if(err){
          return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      // res.redirect("/login");
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
