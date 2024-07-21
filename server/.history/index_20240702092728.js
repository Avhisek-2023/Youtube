import express from "express";
import mongoose from "mongoose";
// import dontenv from "dotenv";
// dontenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// const PORT = process.env.PORT;
const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server Running on the PORT ${PORT}`);
});

// const DB_URL = process.env.CONNECTION_URL;

// mongoose
//   .connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
