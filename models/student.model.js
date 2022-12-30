const mongoose = require('mongoose')

module.exports = mongoose.model('Student',{
    student_id : {type:Number},
    student_name : {type:String},
    student_address : {type:String},
    student_gender : {type:String},
    photo_url : {type:String},
    student_dob : {type:Date},
    student_qualification : {type:String},
    student_mobile : {type:Number},
    student_password : {type:String},
    student_username : {type:String}

})