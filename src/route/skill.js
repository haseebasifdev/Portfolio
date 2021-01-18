const express = require("express");
const { Skill, getSkills } = require("../controller/skill");
const requireLogin = require("../middleware/requireLogin");

const router=express.Router();
router.post("/skill",requireLogin,Skill);
router.get("/skills",getSkills);


module.exports=router;