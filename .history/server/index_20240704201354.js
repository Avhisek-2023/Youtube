import express from "express";
import mongoose from "mongoose";

import dontenv from "dotenv";
dontenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT;
console.log(PORT);
const DB_URL = process.env.CONNECTION_URL;

app.listen(PORT, () => {
  console.log(`Server Running on the PORT ${PORT}`);
});
