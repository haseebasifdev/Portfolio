const express = require("express");
const app=express();
const env=require("dotenv");
env.config();
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello to the future")
});
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
