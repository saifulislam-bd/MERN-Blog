import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../routes/user.route.js";

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

//middleware
app.use("/api/user", userRoutes);

//server listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
