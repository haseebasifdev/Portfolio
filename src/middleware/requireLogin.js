
const jwt=require('jsonwebtoken')
const { JWT_SECRET } = require("../config/keys")
const mongoose = require("mongoose");
const User=require("../model/auth")
module.exports=async (req,res,next)=>{
    const {authorization}=req.headers
    console.log({authorization});
    if (!authorization) {
        return res.status(400).json({error:"you must login"})
    }
    const token=authorization.replace("Bearer ","");
    console.log({token});
    jwt.verify(token,JWT_SECRET,(error,payload)=>{
        if(error){
            return res.status(400).json({error:" You Must Login"})
        }
        const {_id}=payload
        User.findById(_id).select('_id email name')
        .then(userdata=>{
            req.user=userdata
            next()
        })

    });
    
}