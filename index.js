const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

app.get("/api/test", () => {
  console.log("Test api called successfully");
});

app.listen(process.env.SERVER_PORT || 5000, () => {
  console.log("Server running at", process.env.SERVER_PORT || 5000);
});
