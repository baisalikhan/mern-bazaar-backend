const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

app.use("/api/user", userRoute);

app.listen(process.env.SERVER_PORT || 5000, () => {
  console.log("Server running at", process.env.SERVER_PORT || 5000);
});
