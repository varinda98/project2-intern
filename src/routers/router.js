const express = require('express');
const collegeControler=require("../controllers/college");
const collegeModel = require('../models/collegeModel');
const router=express()

router.post("/college",collegeControler.college)









module.exports=router