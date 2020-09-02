const express = require('express');
const { model } = require('mongoose');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/shop');
const multer = require('multer');
const upload = multer({ dest : './public/uploads' }).single('img');
const product = require('../models/product')

//config file upload

router.get('/', productController.index);

router.get('/contact', productController.contact);

router.get('/shop', productController.shop);

router.get('/checkout', productController.checkout);

router.get('/cart', productController.shop_cart);

router.get('/add', productController.addProducts);

router.post('/product', upload, function (req, res) {
    console.log(req.body, req.file);

    const {
        name,
        price,
        detail,
        size
    } = req.body

    const img = req.file.path.split('\\').slice(1).join('\\')

    const newPostData = {
        name : name,
        price : price,
        detail : detail,
        img : img,
        size : size
    }

    const newPost = new product(newPostData)
    newPost.save();
    res.redirect('/add');
})

module.exports = router;
