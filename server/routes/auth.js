const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

//Register route
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) return res.status(404).json("User already registered");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json("success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("login request", req.body);
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json("Invalid password");

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
