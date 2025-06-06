import express from "express";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

// Register Route
userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, pass } = req.body;

    if (!name || !email || !pass) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new userModel({ name, email, pass });
    const result = await newUser.save();

    return res.status(201).json({ message: "User registered", user: result });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// Login Route
userRouter.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await userModel.findOne({ email, pass });
    if (!user) {
      return res.status(401).json({ message: "Invalid user or password" });
    }

    return res.json({ loggedIn: true, ...user._doc });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

export default userRouter;
