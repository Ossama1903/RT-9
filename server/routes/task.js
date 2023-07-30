const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/user");

const { createTask, getTasksByUser } = require("../controllers/task");

router.post("/", authorize, createTask);
router.get("/get-tasks-by-users", authorize, getTasksByUser);

module.exports = router;
