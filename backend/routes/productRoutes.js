const express = require('express');
const { addProduct, getProduct, updateProduct, deleteProduct, getProductById } = require('../controllers/ProductController');
const router = express.Router();

router.get("/", getProduct)
router.get("/:id", getProductById)
router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)



module.exports = router;