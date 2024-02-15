import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("DB is not connected", err.message);
  });

//server listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
