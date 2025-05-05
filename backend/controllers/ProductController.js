const Product = require("../models/mongo/Product");


const addProduct = async (req, res) => {
    try {

        const { title, description, price } = req.body;
        if (!title) {
            return res.status(400).json({
                message: "Title is Required"
            })
        }
        if (typeof price !== "number") {
            return res.status(400).json({
                message: "Price must be numeric"
            })
        }
        const product = new Product({ title, description, price });
        const saved = await product.save();
        res.status(201).json(saved)
    } catch (error) {
        console.error("Error", error)
        return res.status(500).json({ message: "Server Error" })
    }

}

module.exports = {
    addProduct
}