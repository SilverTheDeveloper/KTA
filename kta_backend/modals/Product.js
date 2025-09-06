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
    keyFeatures: {
      type: String,
    },
    shortDesc: {
      type: String,
    },
    longDesc: {
      type: String,
    },
    recommendedApplications: {
      type: String,
    },
    packagingStorage: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    usageGuide: {
      surfacePreparation: { type: String },
      mixing: { type: String },
      application: { type: String },
      grouting: { type: String },
      coverage: { type: String },
      curingAndSetting: { type: String },
      potLife: { type: String },
      recommendedTileTypes: { type: String },
      storageShelfLife: { type: String },
      compatibility: { type: String },
      precautions: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
