const express = require('express')
const router = express.Router();

router.get("/products")
router.get("/products/:id")


module.exports = router