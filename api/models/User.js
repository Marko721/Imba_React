const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: false,
      default: "",
    },
    jobsLiked: {
      type: Array,
      required: false,
      default: [],
    },
    // we can make createdAt and updatedAt but we use timestamps instead
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
