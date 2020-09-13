const product = require('../models/product');
const { model } = require('mongoose');
const path = require('path');

module.exports = {
    index : async (req, res) => {
        const products = await product.find().lean().sort();
        res.render('site/page/index', { product : products });
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

    addProducts : function (req, res) {
        res.render('site/admin/postProduct');
    },

    addCategory : function (req, res) {
        res.render('site/admin/postCategory');
    }
}