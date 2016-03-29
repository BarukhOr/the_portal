const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

//Staff Schema
var staffSchema = new Schema({
	name:{
		type:String,
	},
	imgUrl:{
		type:String
	},
	username:{
		type:String,
		unique:true,
		lowercase:true,
		min:[3,'User Name is too small'],
	},
	job:{
		type:[Number],
		min:[1,'You need at least 1 job'],
	},
	password:{
		type:String,
	}
},{collection:'staff'}); //override default collection name


// On Save Hook, encrypt password
// Before saving a model, run this function
staffSchema.pre('save',function(next){
	//get access to the staff model
	const staff = this;

	//generate a salt then run callback
	bcrypt.genSalt(10,function(err,salt){
		if (err) {return next(err)}

		//hash(encrypt) the password using the salt then run the callback
		bcrypt.hash(staff.password,salt,null,function(err,hash){
			if(err){return next(err)}

			//overwrite the plain text password with encrypted password
			staff.password = hash;
			next();
		})
	})
})
//Create the Staff class
const StaffClass = mongoose.model('staff',staffSchema)

//Export the Staff class
module.exports = StaffClass