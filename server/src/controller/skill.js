
const Skill=require("../model/skill")

exports.Skill=(req,res)=>{
    const {name,image,skill}=req.body;
    console.log("Came for skill");
    console.log({body:req.body});
    const _Skill=new Skill({
        name,image,skill
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
exports.getSkills=(req,res)=>{
    const skill=true
    Skill.find()
    .exec((error,allSkills)=>{
        if(error)
        {
            return res.status(400).json({
                message:error
            })
        }
        if(allSkills)
        {
            const skills=allSkills.filter(skill=>skill.skill==true)
            const tools=allSkills.filter(skill=>skill.skill==false)
            return res.status(200).json({
                skills,tools
            })
        }
    })
   
}