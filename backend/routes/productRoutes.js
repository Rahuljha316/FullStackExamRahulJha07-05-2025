const express = require('express');
const { addProduct, getProduct } = require('../controllers/ProductController');
const router = express.Router();

router.get("/", getProduct)
router.post("/", addProduct)
// router.get("//:id")


module.exports = router;