const router = require("express").Router();
const Candidate = require("../modals/Candidate"); // Fixed path

router.post("/add", async (req, res) => {
  const { name, city, email, post, mobileNo, message } = req.body;

  const newCandidate = new Candidate({
    name,
    city,
    email,
    post,
    mobileNo,
    message,
  });

  try {
    const candidateObj = await Candidate.findOne({ email: req.body.email });
    if (candidateObj) {
      return res.status(400).json("Email already exists!");
    }
    const saveCandidte = await newCandidate.save();
    res.status(200).json(saveCandidte);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
