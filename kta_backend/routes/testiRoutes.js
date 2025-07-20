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

router.get('/getAll', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const testimonials = await Testimonial.findById(req.params.id);
    await testimonials.deleteOne();
    return res.status(200).json("Testimonial has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
