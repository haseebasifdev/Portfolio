const {check,validationResult }=require("express-validator");


exports.validateContactMe=[
    check("name")
    .notEmpty()
    .isLength({min:3})
    .withMessage("Name require min 3 letters"),
    
    check("email")
    .isEmail()
    .withMessage("Email is Required or Invalid Email"),
    
    check("subject")
    .notEmpty()
    .isLength({min:3})
    .withMessage("subject require min 3 letters"),

    check("message")
    .notEmpty()
    .isLength({min:3})
    .withMessage("Name require min 3 letters"),

],
exports.isRequestedValidated=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.array().length>0){
        return res.status(400).json({error:errors.array()})
    }
    next()
}

