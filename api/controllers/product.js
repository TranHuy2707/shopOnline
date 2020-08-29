const product = require('../../models/product');
const { model } = require('mongoose');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest : './public/uploads' });

module.exports = {

    shop : async (req, res) => {
        const products = await product.find().lean().sort();
        console.log("show");
        res.json('site/page/shop-grid', {product : products});
    },

    addProducts : function (req, res) {
        res.json('site/admin/postProduct');
    },

    postProduct : upload.single('img'), function (req, res) {
        console.log(req.file, req.body);
    }
}