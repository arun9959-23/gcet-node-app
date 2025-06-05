import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import ordersRouter from "./routes/ordersroutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const DBUSER=encodeURIComponent(process.env.DBUSER)
const DBPASS=encodeURIComponent(process.env.DBPASS)
const MONGO_URI=`mongodb+srv://${DBUSER}:${DBPASS}@cluster0.bfferni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


//const MONGO_URI = process.env.MONGO_URI

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", ordersRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });