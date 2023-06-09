const express = require('express');
const productsRouter = require('./products');
const cartRouter = require('./cart');

const router = express.Router();

router.use('/products', productsRouter)
router.use('/cart', cartRouter)

module.exports = router; 