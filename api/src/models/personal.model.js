const mongoose = require("mongoose");

const personalSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true ,unique:true},
    fullname: { type: String, required: true },
    profilepicture: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("personal", personalSchema);
