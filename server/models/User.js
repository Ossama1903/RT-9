// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   dateOfBirth: {
//     type: Date,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ["Male", "Female", "Other"],
//     required: true,
//   },
//   profilePicture: {
//     type: Buffer,
//   },
//   contactInformation: {
//     phoneNumber: {
//       type: String,
//     },
//     address: {
//       type: String,
//     },
//     other: {
//       type: String,
//     },
//   },
//   tasks: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Task",
//     },
//   ],
//   routines: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Routine",
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
