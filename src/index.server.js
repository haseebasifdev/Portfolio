const express = require("express");
const app=express();
const env=require("dotenv");
env.config();
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const contactRoute=require("./route/ContactMe")
const projectRoute=require("./route/project")
const AuthRoute=require("./route/auth")
const SkillRoute=require("./route/skill")
app.get("/", (req, res) => {
    res.send("Hello to the future")
});
const port = process.env.PORT || 5000;
app.use("/api",contactRoute)
app.use("/api",projectRoute)
app.use("/api",AuthRoute)
app.use("/api",SkillRoute)
if (process.env.NODE_ENV=="production") {
    app.use(express.static("client/build"))
    const path=require("path")
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,"client",'build','index.html'))
    });
}
mongoose.connect(process.env.MONGODBURL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{
    console.log("Database Connected");
    app.listen(port, () =>console.log( `Server running on port ${port} 🔥`));
})
.catch(err=>{
    console.log("Error in COnnecting");
})


