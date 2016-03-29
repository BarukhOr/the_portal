const passport = require('passport')
const Staff = require('../models/staff')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const ActiveDirectory = require('activedirectory')
const LocalStrategy = require('passport-local')



//Create local Strategy
const localLogin = new LocalStrategy(function(username,password,done){
	// console.log("Just a preliminary console log");
	
	// usernameAndDomain += '@southernct.edu'
	const localConfig = {
		baseDN:'dc=scsu,dc=southern,dc=edu',
		url:'ldap://scsu.southernct.edu',
		username:username+"@southernct.edu",
		password:password
	}
	
	// console.log("username: ",localConfig.username)
	// console.log("url",localConfig.url)
	var ad = new ActiveDirectory(localConfig)
	// console.log(ad)
	ad.authenticate(localConfig.username,localConfig.password,function(err,auth){
		if (err) {return done(err)}
		if (auth){
			Staff.findOne({username:username},function(err,staff){
				if (err) {return done(err)}
				if (staff){
					return done(null,staff)
				}else{
					console.log("user is a student, but is not a staff")
					return done(null,false)
				}
			})
		}else{
			console.log("Authentication Failed")
			return done(null,false)
		}

	})
	// return done(null,false)
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