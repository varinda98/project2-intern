const { find } = require("../models/College Model");
const collegeModels = require("../models/College Model");
const internModels = require("../models/Intern Model");
const  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const  mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const createInterns = async function (req, res) {
    try {
        let { name, email, mobile, collegeId, collegeName, isDeleted, ...rest } = req.body;

        if (Object.keys(rest) != 0) return
        let findnumber = await internModels.find({ mobile: mobile })
        if (findemail.length > 0) return res.status(400).send({ status: false, msg: "email id is already exist" })

        if (mobile) {
            if (!mobileRegex.test(mobile)) return res.status(400).send({ status: false, msg: "Invalid Mobile number" })
        }

        if (!name || !email || !mobile || !collegeName) return res.status(400).send({ status: false, msg: "Mandatory fields are Required" })

        const collegeNames = await collegeModels.findOne({ $or: [{ fullName: collegeName }, { name: collegeName }] })
        if (!collegeNames) return res.status(404).send({ status: false, msg: "college name is invalid" })
        collegeId = collegeNames._id

        let data = { name, email, mobile, collegeId, collegeName, isDeleted }

        const internData = await internModels.create(data);

        res.status(201).send({ status: true, message: "Registration Successfull", data: internData })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })

    }
}



module.exports.createInterns=createInterns