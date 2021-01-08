const mongoose = require("mongoose");

const Contactme=mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("ContactMe",Contactme);