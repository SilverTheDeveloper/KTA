const router = require("express").Router();
const Testimonial = require("../modals/Testimonial");

router.post("/add", async (req, res) => {
  const { name, comment, designation, profilePic } = req.body;

  const newTesti = new Testimonial({
    name,
    comment,
    designation,
  });

  try {
    const saveTesti = await newTesti.save();
    res.status(200).json(saveTesti);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
