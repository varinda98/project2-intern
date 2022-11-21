const express = require('express');
const collegeControler=require("../controllers/college");
const collegeModel = require('../models/collegeModel');
const internControl= require('../controllers/internControler')
const router=express()

router.post("/college",collegeControler.college)

router.post("/intern",internControl.createInterns)

router.get("/functionup/collegeDetails",collegeControler.getcollegedetail)






module.exports=router