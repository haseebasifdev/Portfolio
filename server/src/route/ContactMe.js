const express = require("express");
const { ContactMe } = require("../controller/ContactMe");
const { validateContactMe, isRequestedValidated } = require("../validator/ContactMe");

const router=express.Router();
router.post("/contactme",validateContactMe,isRequestedValidated,ContactMe)

module.exports=router;