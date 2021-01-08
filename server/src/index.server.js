const express = require("express");
const app=express();
const env=require("dotenv");
env.config();
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const contactRoute=require("./route/ContactMe")
app.get("/", (req, res) => {
    res.send("Hello to the future")
});
const port = process.env.PORT || 5000;
app.use("/api",contactRoute)
mongoose.connect(process.env.MONGODBURL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{
    console.log("Database Connected");
    app.listen(port, () =>console.log( `Server running on port ${port} 🔥`));
})
.catch(err=>{
    console.log("Error in COnnecting");
})


