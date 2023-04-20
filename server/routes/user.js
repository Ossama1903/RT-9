const express = require("express");
const router = express.Router();
const multer = require("multer");
const { authorize } = require("../middleware/user");

const { signup, login } = require("../controllers/user");

const upload = multer();

router.post("/signup", upload.single("profilePicture"), signup);
router.post("/login", login);
router.put("/", authorize, (req, res) => {
  res.send("update usessr");
});

router.get("/get-user", (req, res) => {
  res.send("get user");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
