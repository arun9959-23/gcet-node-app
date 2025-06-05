import express from 'express'
import productModel from "../models/productModel.js";

const productRouter = express.Router()

productRouter.get("/all", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});
router.post("/new", async (req, res) => {
  console.log("req.body:", req.body);  
  const { name, price } = req.body;
  const order = await Order.create({ name, price });
  res.json(products);
});

export default productRouter