const Task = require("../models/Task");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const createTask = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const email = jwt.verify(token, "PZWT2Y3RW39yS2YFlM3o").email;
    const foundUser = await User.findOne({ email });
    const newTask = new Task({
      ...req.body,
      user: foundUser._id,
    });
    const savedTask = await newTask.save();
    res.status(201).json({ task: savedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create task." });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const email = jwt.verify(token, "PZWT2Y3RW39yS2YFlM3o").email;
    const foundUser = await User.findOne({ email });
    const taskList = await Task.find({ user: foundUser._id });
    res.status(201).json({ tasks: taskList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get tasks." });
  }
};

module.exports = {
  createTask,
  getTasksByUser,
};
