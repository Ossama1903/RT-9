const User = require("../models/User");
const bcrypt = require("bcrypt");

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

module.exports = {
  signup,
};
