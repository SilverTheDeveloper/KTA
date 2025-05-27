const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
    },
    shortDesc: {
      type: String,
    },
    longDesc: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
