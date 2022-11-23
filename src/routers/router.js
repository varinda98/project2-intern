const express = require('express');
const collegeControler=require("../controllers/college");

const internControl= require('../controllers/internControler')
const router=express.Router()

router.post("/functionup/colleges",collegeControler.college)

router.post("/functionup/interns",internControl.createInterns)

router.get("/functionup/collegeDetails",collegeControler.getcollegedetail)

router.all("*", function(req, res){
    return res.status(400).send({status: false, msg: "Path not found" })
})


module.exports=router   