const express = require('express');
const collegeControler=require("../controllers/college");

const internControl= require('../controllers/internControler')
const router=express()

router.post("/functionup/colleges",collegeControler.college)

router.post("/functionup/interns",internControl.createInterns)

router.get("/functionup/collegeDetails",collegeControler.getcollegedetail)


module.exports=router