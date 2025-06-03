/*import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String }
});

// Define user model
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Good Morning");
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("arun");
});

app.get("/weather", (req, res) => {
  res.send("31degree");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "laptop", price: 34 },
    { name: "phone", price: 64 },
    { name: "telephone", price: 45 },
  ];
  res.json(products);
});

// Register route — adds a user named "john"
app.get("/register", async (req, res) => {
  try {
    const result = await User.create({ name: "john" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(8080, () => {
  console.log("🚀 Server started on port 8080");
});*/
/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

const userSchema = mongoose.Schema({
  name:{type: String},
});

const user = mongoose.model("User",userSchema);

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.post("/register", async (req, res) => {
  const { name } = req.body;
  const result = await User.create({ name });
  return res.json(result);
});


app.get("/name", (req, res) => {
  res.send("arun");
});

app.get("/weather", (req, res) => {
  res.send("31degree");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});*/
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
});
const User = mongoose.model("User", userSchema);

const ProductsSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number }
});
const Products= mongoose.model("Products", ProductsSchema);

app.get("/", (req, res) => {
  res.send("Good Morning");
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("arun");
});

app.get("/weather", (req, res) => {
  res.send("31degree");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});


app.post("/register", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await User.create({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/Products", async (req, res) => {
  const{name, price}=req.body;
  const products=await Products.insertOne({name,price});
  return res.json(result);
  
});

app.post("/login", async (req, res) => {

    const { email,pass } = req.body;
    const result = await user.findOne({ email,pass });
    if(!result)return res.json({invalid})
      res.json(result);

});

app.listen(8080, () => {
  console.log("🚀 Server started on port 8080");
});

