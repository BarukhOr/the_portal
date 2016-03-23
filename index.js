//Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes/router')
const mongoose = require('mongoose')
const app = express()

//DB Setup
mongoose.connect('mongodb://localhost/auth')

//App Setup
app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))
router(app)

//Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log("The Queen hears thy pleas upon the 3090, Peasants.")