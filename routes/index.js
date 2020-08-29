const express = require('express');
const { model } = require('mongoose');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/shop');

router.get('/', productController.index);

router.get('/contact', productController.contact);

router.get('/shop', productController.shop);

router.get('/checkout', productController.checkout);

router.get('/cart', productController.shop_cart);

router.get('/add', productController.addProducts);

router.post('/product', productController.postProduct);
//create product
// router.post('/product', async (req, res) => {
//     console.log(req.body)
//     console.log(req.file)

//     const { name,
//             detail,
//             price,
//             size } = req.body

//     img = upload.single('img')
//     const newPostData = {
//         name : name,
//         detail : detail,
//         price : price,
//         size : size,
//         img : req.body.img.path
//     }

//     newPostData.save()
//     //const newPost = new product(newPostData)
//     //await newPost.save()
//     res.redirect('/add')
// });

module.exports = router;
