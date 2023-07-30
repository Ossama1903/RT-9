const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ["high", "medium", "low"] },
  status: { type: String, enum: ["completed", "in progress", "not started"] },
  tags: [{ type: String }],
  subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
