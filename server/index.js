const express = require("express");
const user = require("./routes/user");
const data = require("./routes/data");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const MONGO_URI = `mongodb+srv://kage1903:mongo19@rt-9-cluster.wx4nhre.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use("/user", user);
app.use("/data", data);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
