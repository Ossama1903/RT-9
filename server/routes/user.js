const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("signup");
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
