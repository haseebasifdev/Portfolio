const mongoose = require("mongoose");

const Skill=mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    image:{
        type:String,
        required:true,
    },
    skill:{
        type:Boolean
    }
})

module.exports=mongoose.model("Skill",Skill);