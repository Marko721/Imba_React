const router = require("express").Router();
const User = require("../models/User");
// const bcrypt = require("bcrypt");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    // !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc; // we did this to separate password from other properties so json will return everything but the password in postman
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
