const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const multer = require("multer");
const { authorize } = require("../middleware/user");

const {
  signup,
  uploadFiles,
  login,
  searchUser,
  authorizeController,
} = require("../controllers/user");

const upload = multer();

// mongoose.connect(
//   `mongodb+srv://kage1903:mongo19@rt-9-cluster.wx4nhre.mongodb.net/?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const conn = mongoose.connection;
// let gfs;
// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("userUploads");
// });

// router.get("/get-user-files", authorize, (req, res) => {
//   const metadata = { user: "sheikhusamabilal@gmail.com" };
//   console.log("ss");
//   gfs.files.find(metadata).toArray((err, files) => {
//     console.log("we're in the callback now");

//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Failed to retrieve files." });
//     }

//     if (files.length === 0) {
//       return res.status(404).json({
//         message: "No files matching the metadata criteria were found.",
//       });
//     } else {
//       files.forEach((file) => {
//         console.log(file.filename);
//       });
//       return res.status(200).json({
//         message: "files found.",
//       });
//     }
//   });
// });

router.post("/signup", upload.single("profilePicture"), signup);
router.post("/login", login);
router.get("/authorize", authorize, authorizeController);
router.post("/upload-files", authorize, uploadFiles);
router.get("/search", authorize, searchUser);

router.get("/get-user", (req, res) => {
  res.send("get user");
});

router.put("/", authorize, (req, res) => {
  res.send("update usessr");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
