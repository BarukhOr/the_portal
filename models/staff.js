const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Staff Schema
var staffSchema = new Schema({
	name:{
		type:String
	},
	imgUrl:{
		type:String
	},
	username:{
		type:String,
		unique:true,
		lowercase:true
	},
	job:{
		type:[Number]
	},
	password:{
		type:String
	}
});

//Create the Staff class
const StaffClass = mongoose.model('staff',staffSchema)

//Export the Staff class
module.exports = StaffClass














// var Staff = module.exports = mongoose.model('staff',staffSchema)

// //Get all staff
// module.exports.getStaff = function(callback,limit){
// 	Staff.find(callback).limit(limit);
// }

// module.exports.getStaffByID = function(username,callback){
// 	Staff.findOne({'username':username},callback);
// }