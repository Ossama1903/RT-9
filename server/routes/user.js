const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  console.log(req.body);

  try {
    const newUser = new User({
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "password",
      dateOfBirth: new Date("1990-01-01"),
      gender: "Male",
      contactInformation: {
        phoneNumber: "1234567890",
        address: "123 Main St",
      },
    });
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log("LMFAssOO");
    res.status(400).json({ message: "Email already exists" });
  }
});

router.post("/login", (req, res) => {
  res.send("login");
});

router.put("/update", (req, res) => {
  // First Name: the name of the user
  // Last Name: the name of the user
  // Email: the email address of the user
  // Password: a secure password for the user's account
  // Date of Birth: The user's date of birth.
  // Gender: The user's gender.
  // Profile Picture: The user's profile picture, stored as an image file.
  res.send("update user");
});

router.get("/get-user", (req, res) => {
  res.send("get user");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
