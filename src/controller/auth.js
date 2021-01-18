const bcrypt=require('bcryptjs')
const { JWT_SECRET } = require("../config/keys")
const JWT=require('jsonwebtoken')
const User=require("../model/auth")
const requireLogin=require('../middleware/requireLogin')

const mongoose=require("mongoose")
exports.signup=(req, res) => {
    console.log(req);
     const {name,email,password}=req.body
    
    if(!name || !email || !password){
       return  res.status(400).json({error:"All Fiels are Required"});
    }
    console.log({data:req.body});
    User.findOne({email})
    .then(savedUser=>{
        if(savedUser){
           return res.status(400).json({error:"Already Saved with this email"});
        }
        bcrypt.hash(password,12)
        .then(hashpassword=>{
            const user=new User({
                email,name,password:hashpassword
            })
    
            user.save()
            .then(user=>{
                
                return res.status(200).json({message:"Saved Successfully ",user})
    
            }).catch(err=>{
                return res.status(400).json({message:err})
    
            })
        })
        
    }).catch(err=>{
        console.log(err);
    })
}
exports.signin= (req, res) => {
    console.log({Requested:req.body});
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({message:"email and password are Required"})
    }
    User.findOne({email}).
    then(user=>{
        // console.log({FindededUser:user.password,Requested:req.body}); 
        if(user){
            bcrypt.compare(password,user.password)
            .then(matched=>{
                if(matched){
                    const {_id,name,email}=user
                    const token=JWT.sign({_id:user._id},JWT_SECRET)
                    return res.status(200).json({token,user:{_id,name,email}})
                }
                else{
                    return res.status(400).json({error:"invalid email or password"})
                }
            }).catch(error=>{
                console.log(error);
            })
        }
        else{
            return res.status(400).json({error:"Account Not Found"})
        }
    })
    .catch(err=>{
        console.log(err);
    })
}