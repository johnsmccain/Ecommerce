const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const app = express();

// middle wares
app.use(morgan("common"));
app.use("/", (req, res) => {
  console.log("main site");
});

app.listen(5000, () => {
  console.log("connected");
});
