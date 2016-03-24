const passport = require('passport')
const Staff = require('../models/staff')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const ActiveDirectory = require('activedirectory')
const LocalStrategy = require('passport-local')



//Create local Strategy
const localLogin = new LocalStrategy({},function(username,password,done){
	const localConfig = {
		url:'ldap://scsu.southernct.edu',
		baseDN:'dc=scsu,dc=southern,dc=edu',
		username:username.'@southernct.edu',
		password:password
	}

	
	const ad = new ActiveDirectory(config)
	ad.authenticate(localConfig.username,localConfig.password,function(err,auth){
		if(err){return done(err)}
		if(!auth){return done(null,false)}
		//Verify SCSU credentials
		if(auth){
			console.log('1st step accomplished')
			//Verify that user is part of reslife staff
			User.findOne({username:username},function(err,user){
				if(err){return done(err)}
				if(!user){return done(null,false)}

				//if a user is found in the staff database with this username then return that staff member's information
				return done(null,user)
			})
		}
		
	})
})

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
passport.use(localLogin)