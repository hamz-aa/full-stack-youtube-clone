import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("connected to db"))
    .catch((err) => {
      throw err;
    });
};

app.listen(8080, () => {
  connect();
  console.log("connected to server");
});
