const Skill=require("../model/skill")

exports.Skill=(req,res)=>{
    const {name,image,type}=req.body;
    const _Skill=new Skill({
        name,image,type
    })
    _Skill.save((error,message)=>{
        if(error)
        {
            return res.status(400).json({
                message:error
            })
        }
        if(message)
        {
            return res.status(200).json({
                message:'Skill Save Successfully'
            })
        }
    })
}