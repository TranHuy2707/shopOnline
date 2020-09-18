const product = require('../models/product');
const productCategory = require('../models/productCategory');
const { model } = require('mongoose');
const path = require('path');

module.exports = {
    index : async (req, res, next) => {
        const products = await product.find().lean().sort();
        res.render('site/page/index', { product : products });
        next();
    },

    contact : function (req, res) {
        res.render('site/page/contact');
    },

    shop : async (req, res) => {
        const products = await product.find().lean().sort();
        res.render('site/page/shop-grid', {product : products});
    },

    checkout : function (req, res) {
        res.render('site/page/checkout');
    },

    shop_cart : function (req, res) {
        res.render('site/page/shoping-cart');
    },

    addProducts : async (req, res) => {
        const productsCategory = await productCategory.find().lean().sort();
        res.render('site/admin/postProduct', { productCategory : productsCategory });
    },

    addCategory : function (req, res) {
        res.render('site/admin/postCategory');
    }
}