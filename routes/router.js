const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})


module.exports = function(app){
	app.post('/authCheck',requireAuth,function(request,response){
		response.send({hi:"Greetings mortal."})
	})

	// app.post('/signup', Authentication.signup)
	
	app.post('/signin',requireSignin,Authentication.signIn)
	// app.post('/signin',requireSignin)


	app.get('/',function(request,response,next){
		response.send(['watermelon','mongols','phobe'])
		console.log(request.body)
	})
}