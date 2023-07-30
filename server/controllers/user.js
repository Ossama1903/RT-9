const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

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

const uploadFiles = (req, res) => {
  const authHeader = req.headers;
  const token = authHeader["authorization"].split(" ")[1];
  const decoded = jwt.verify(token, "PZWT2Y3RW39yS2YFlM3o");

  const storage = new GridFsStorage({
    url: `mongodb+srv://kage1903:mongo19@rt-9-cluster.wx4nhre.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return {
        bucketName: "userUploads",
        filename: file.originalname,
        metadata: {
          user: decoded.email,
        },
      };
    },
  });

  const upload = multer({ storage }).array("files", 10);

  upload(req, res, (err) => {
    if (err) {
      console.error("Error uploading files:", err);
      return res.status(500).send("Error uploading files.");
    }
    const uploadedFiles = req.files;
    return res.send("Files uploaded successfully.");
  });
};

const authorizeController = (req, res) => {
  res.status(200).json({ message: "token authorized" });
};

const searchUser = async (req, res) => {
  const { query } = req.query;
  try {
    const results = await User.find({ $text: { $search: query } }).exec();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error in search user" });
  }
};

module.exports = {
  signup,
  login,
  uploadFiles,
  authorizeController,
  searchUser,
};
