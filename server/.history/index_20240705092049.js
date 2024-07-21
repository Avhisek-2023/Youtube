import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import dontenv from "dotenv";
import userRoutes from "./routes/user.js";

dontenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT;
const DB_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Db connected");
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
