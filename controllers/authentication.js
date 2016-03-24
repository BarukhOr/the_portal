const Staff = require('../models/staff')
const config = require('../config')
const jwt = require('jwt-simple')

function tokenForStaff(staff){
	const timestamp = new Date().getTime()
	return jwt.encode({sub:staff.username,iat:timestamp,job:staff.job},config.secret)
}

exports.signup = function(request,response,next){
	const name = request.body.name
	const imgUrl = request.body.imgUrl
	const username = request.body.username
	const password = request.body.password
	const job = request.body.job

	// Check to see if a user with the given username exists
	Staff.findOne({username:username},function(err,existingStaff){
		if (err) {return next(err);}

		//If a user with the given username does exists, return an error
		if(existingStaff){
			return response.status(422).send({error:'Username is in use'})
		}

		//If a user with the given username does not exist, create and save user record
		const staff = new Staff({
			name:name,
			imgUrl:imgUrl,
			username:username,
			job:job,
			password:password
		})
		staff.save(function(err){
			if (err){return next(err)}

			//Respond to request indicating that the user has been added to the staff table
			response.json({token:tokenForStaff(staff)})
		})
	})
	
}