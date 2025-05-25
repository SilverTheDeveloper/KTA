const router = require("express").Router();
const Product = require("../modals/Product"); // Fixed path

router.get("/getall", async (req, res) => {
    try {
        Product.find({}).then(function (product) {
            res.send(product);
        });
    } catch (error) {
        res.send(error);
    }
});

router.post("/add", async (req, res) => {
    const newProduct = new Product({
        name: 'test product',
        desc: 'test desc',
    });
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
