var http = require("http");
const collegeModel = require('../models/collegeModel')

const college = async function (req, res) {
    try {
        const data = req.body
        const { name, fullName, logoLink, isDeleted } = data
        if (!name || !fullName || !logoLink )
        {
            return res.status(400).send({ status: false, msg: "All filds are required" })
        }
        else{
            let urlCheck=false
            await http.get({ host:logoLink}, function (res) {
                if (res.statusCode == 200 || res.statusCode == 301)
                {
                    urlCheck=true
                    console.log("This site is up and running!");
                }
            });

            if (urlCheck == false) {
                return res.status(404).send({ status: false, msg: "Please provide a valid link" })
            }
            const create = await collegeModel.create(data)
            return res.status(200).send({ status: true, msg: create })
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }  
}



module.exports.college = college