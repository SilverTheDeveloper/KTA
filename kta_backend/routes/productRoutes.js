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
  const { name, type, category, usage, shortDesc, longDesc, img } = req.body;

  const newProduct = new Product({
    name,
    type,
    category,
    usage,
    shortDesc,
    longDesc,
    img
  });

  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.deleteOne();
    return res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
