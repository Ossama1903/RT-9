const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    gender,
    phoneNumber,
    address,
  } = req.body;

  const saltRounds = 10;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      dateOfBirth,
      gender,
      contactInformation: {
        phoneNumber,
        address,
      },
    });
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Email already exists" });
  }
};

const login = async (req, res) => {
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

  res.status(200).json({
    email: user.email,
    token,
  });
};

module.exports = {
  signup,
  login,
};
