const mongoose = require("mongoose");

const danceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide an email"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dance", danceSchema);
