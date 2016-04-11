const Authentication = require('./authentication')
const passportService = require('passport')
const passport = require('passport')
var fs = require('fs');
var busboy = require('connect-busboy');

const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})

module.exports = function(app){

	app.post('/signin', requireSignin, Authentication.signIn)

	app.post('/upload', function(req, res, next){
		console.log('Upload started');
		var fstream;
		req.pipe(req.busboy);
		console.log('busboy');
		req.busboy.on('file', function(fieldname, file, filename){
		    console.log('uploading ' + filename);
		    var dir = __dirname + '/attachedImages/';
		    if(!fs.existsSync(dir)) {
		        fs.mkdirSync(dir);
		    }
		    fstream = fs.createWriteStream(dir + filename);
		    file.pipe(fstream);
		    fstream.on('close', function(){
		        // Upload Complete Event
		        //res.redirect('back');
		        console.log('Done ' + filename);
		    });
		});
	})
}