const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    comment: {
      type: String,
    },
    designation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", TestimonialSchema);
