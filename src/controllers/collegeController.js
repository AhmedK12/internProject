const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")














/*############################################################## GET API   ######################################################################*/


const getCollegeDetails = async (req,res)=>{
//    task1 find collegeId with help of collegeName

let collegeId =  collegeModel.find({name:req.query})

// find the all intern having this collegeid;

let interns = internModel.find({collegeId:collegeId})



}


