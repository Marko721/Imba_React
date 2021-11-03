const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter First Name"],
      minlength: [2, "Minimum First Name length is 2 characters"],
      maxlength: [16, "Maximum First Name length is 16 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter Last Name"],
      minlength: [2, "Minimum Last Name length is 2 characters"],
      maxlength: [16, "Maximum Last Name length is 16 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter an Email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid Email"], // val is the user inputed text
    },
    password: {
      type: String,
      required: [true, "Please enter an password"],
      minlength: [6, "Minimum password length is 6 characters"],
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
