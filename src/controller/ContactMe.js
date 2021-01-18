const ContactMe=require("../model/contactMe")

exports.ContactMe=(req,res)=>{
    const {name,email,subject,message}=req.body;
    const _contactMe=new ContactMe({
        name,email,subject,message
    })
    _contactMe.save((error,message)=>{
        if(error)
        {
            return res.status(400).json({
                message:error
            })
        }
        if(message)
        {
            return res.status(200).json({
                message:'Message Send Successfully we will contact you as soon as possible'
            })
        }
    })
}