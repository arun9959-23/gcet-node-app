import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Good Morning");
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
app.listen(8080, () => {
  console.log("Server Started on port 8080");
});