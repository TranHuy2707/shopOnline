const express = require('express');
const { model } = require('mongoose');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/add', productController.addProducts);

router.post('/', productController.postProduct);