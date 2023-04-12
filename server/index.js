const express = require("express");
const user = require("./routes/user");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use("/user", user);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
