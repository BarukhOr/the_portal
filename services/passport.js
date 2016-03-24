const passport = require('passport')
const Staff = require('../models/staff')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

// Setup options for JWWT strategy
const jwtOptions = {
	jwtFromRequest:ExtractJwt.fromHeader('authorization'),
	secretOrKey:config.secret
}

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
	//See if the staff username in the payload exists in the database
	Staff.find({username:payload.sub},function(err,staff){
		if (err) {return done(err,false)}

		if (staff){
			//If it does, call 'done' with that staff object
			done(null,staff)
		}else {
			//otherwise, call done without that staff object
			done(null,false)
		}
	})	
})

//Tell Passport to use this strategy
passport.use(jwtLogin)