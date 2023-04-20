const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { signup } = require("../controllers/user");

const upload = multer();

router.post("/signup", upload.single("profilePicture"), signup);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "No user found against the provided email." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid password." });
  }

  const payload = { email: user.email };
  const secret = "PZWT2Y3RW39yS2YFlM3o";
  const expiresIn = "30d";

  const token = jwt.sign(payload, secret, { expiresIn });
  console.log(token);

  res.send("login");
});

router.put("/update", (req, res) => {
  res.send("update user");
});

router.get("/get-user", (req, res) => {
  res.send("get user");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
