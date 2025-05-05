const express = require('express');
const { addProduct, getProduct, updateProduct } = require('../controllers/ProductController');
const router = express.Router();

router.get("/", getProduct)
router.post("/", addProduct)
router.put("/:id", updateProduct)



module.exports = router;