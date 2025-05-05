const express = require('express');
const { addProduct } = require('../controllers/ProductController');
const router = express.Router();

// router.get("/")
router.post("/", addProduct)
// router.get("//:id")


module.exports = router;