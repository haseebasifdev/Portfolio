const Project=require("../model/project")

exports.Project=(req,res)=>{
    // const { name,
    //             image,
    //             videoLink,
    //             description,
    //             live,
    //             tech,
    //             github}=req.body;
    const _Project=new Project({
        ...req.body
    })
    _Project.save((error,message)=>{
        if(error)
        {
            return res.status(400).json({
                message:error
            })
        }
        if(message)
        {
            return res.status(200).json({
                message:'Project Save Successfully'
            })
        }
    })
}