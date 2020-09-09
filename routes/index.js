const express = require('express');
const { model } = require('mongoose');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/shop');
const multer = require('multer');
const upload = multer({dest : './public/uploads'}).fields([{ name: 'img', maxCount: 1 },
                                                           { name: 'img1', maxCount: 1 },
                                                           { name: 'img2', maxCount: 1 },
                                                           { name: 'img3', maxCount: 1 }])

const product = require('../models/product');
const { loginSystem } = require('../controllers/shop');

const account = [{ username: 'admin', password: 'admin' }]

//config file upload

router.get('/', productController.index);

router.get('/contact', productController.contact);

router.get('/shop', productController.shop);

router.get('/checkout', productController.checkout);

router.get('/cart', productController.shop_cart);

router.get('/add', productController.addProducts);

router.get('/login', function (req, res) {
    res.render('site/admin/login')
    console.log(req.body);
    if (account.indexOf(data) = [{ username: 'admin', password: 'admin' }] ){
        res.redirect('site/admin/postProduct')
    }
});

router.post('/product', upload, function (req, res) {

    const {
        name,
        price,
        detail,
        size
    } = req.body

    const img = req.files['img'][0].path.split('\\').slice(1).join('\\')
    const img1 = req.files['img1'][0].path.split('\\').slice(1).join('\\');
    const img2 = req.files['img2'][0].path.split('\\').slice(1).join('\\');
    const img3 = req.files['img3'][0].path.split('\\').slice(1).join('\\');

    const newPostData = {
        name : name,
        price : price,
        detail : detail,
        img : img,
        img1 : img1,
        img2 : img2,
        img3 : img3,
        size : size
    }

    const newPost = new product(newPostData)
    newPost.save();
    res.redirect('/add');
})

router.get('/:id', async(req, res) => {

    const products = await product.findOne({ _id: req.params.id }).lean()
    res.render('site/page/detailProduct', { product: products, id: req.params.id })
})

module.exports = router;
