const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  profilePicture: {
    type: Buffer,
  },
  contactInformation: {
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
  },
});

userSchema.index({ firstName: "text", lastName: "text", email: "text" });

const User = mongoose.model("User", userSchema);

module.exports = User;
