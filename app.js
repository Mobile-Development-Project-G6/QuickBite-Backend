const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

// DB Connection
const DB_URL = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY AT " + "ATLAS");
  })
  .catch(() => {
    console.log("PROBLEM CONNECTING DB");
  });

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});