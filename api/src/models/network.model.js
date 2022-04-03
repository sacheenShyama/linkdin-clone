const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    imgUrl: { type: String, required: true },
    qualification: { type: String, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
