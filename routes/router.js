const Authentication = require('../controllers/authentication')

module.exports = function(app){
	// app.post('/signup', Authentication.signup)
	app.post('/signup', Authentication.signup)
	
	app.get('/',function(request,response,next){
		response.send(['watermelon','mongols','phobe'])
	})
}