import express, { Request, Response } from "express";
import cors from "cors";
// import "dotenv/config";
require("dotenv").config();
import mongoose from "mongoose";

import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(`${process.env.MONGODB_CONNECTION_STRING}`)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`);
});
