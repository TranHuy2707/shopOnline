const product = require('../models/product');
const { model } = require('mongoose');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest : './public/uploads' });

module.exports = {
    index : function (req, res) {
        res.render('site/page/index');
    },

    contact : function (req, res) {
        res.render('site/page/contact');
    },

    shop : async (req, res) => {
        const products = await product.find().lean().sort();
        console.log("show");
        res.render('site/page/shop-grid', {product : products});
    },

    checkout : function (req, res) {
        res.render('site/page/checkout');
    },

    shop_cart : function (req, res) {
        res.render('site/page/shoping-cart');
    },

    addProducts : function (req, res) {
        res.render('site/admin/postProduct');
    },

    postProduct : async (req, res) => {
        console.log(req.file, req.body);
    }
}