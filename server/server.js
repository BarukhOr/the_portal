//Main starting point of the application
const express = require('express')
var path = require("path");
const http = require('http')
const bodyParser = require('body-parser')
var busboy = require('connect-busboy');
const morgan = require('morgan')
const router = require('../app/router')
const mongoose = require('mongoose')
const app = express()

//DB Setup
//mongoose.connect('mongodb://localhost/auth')

//App Setup
app.use(morgan('combined'))
//app.use(bodyParser.json({type:'*/*'}))
app.use(busboy());
app.use(express.static(path.join(__dirname,"../dist")));
router(app)

//Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port, function(){
	console.log("Started listening on port", 3090);
})