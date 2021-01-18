const express = require("express");
const { Project } = require("../controller/project");

const router=express.Router();
router.post("/project",Project);

module.exports=router;