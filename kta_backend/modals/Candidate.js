const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    Post: {
      type: String,
    },
    mobileNo: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", CandidateSchema);
