const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/user");

const { spawn } = require("child_process");

router.post("/execute-python", authorize, (req, res) => {
  const pythonScript = spawn("python", [
    "./routes/script.py",
    "whaaadup my nigga lmfao",
  ]);
  let pythonResponse;

  pythonScript.stdout.on("data", (data) => {
    pythonResponse = data;
  });

  pythonScript.stderr.on("data", (data) => {
    pythonResponse = data;
  });

  pythonScript.on("close", (code) => {
    res.send(pythonResponse);
  });
});

module.exports = router;
