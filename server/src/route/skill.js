const express = require("express");
const { Skill } = require("../controller/skill");

const router=express.Router();
router.post("/skill",Skill);

module.exports=router;