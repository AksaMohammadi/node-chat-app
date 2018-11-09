const path= require('path');
const express = require('express')
const http = require ('http')
const socketIO = require('socket.io')
const {generateMessage , generateLocationMessage} = require('./utils/message.js');
// console.log(__dirname, '/../public')

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 8000;
// console.log(publicPath)
const app = express();

var server = http.createServer(app)
var io = socketIO(server)
app.use(express.static(publicPath))

io.on('connection',(socket)=>{
	console.log('new connection')

socket.emit('newMessage',generateMessage('Admin','welcome to chat app'))	
	
socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined')	)

socket.on('createMessage',(message , callback) => {
	console.log('createMessage',message)
	io.emit('newMessage',generateMessage(message.from,message.text))
	callback()
})

socket.on('createLocationMessage',(coords)=>{
	io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude))
})

socket.on('disconnect',() => {

			console.log('user made disconnection')
		})

})

server.listen(port, () => {
	console.log(`server is now ready to be used at ${port}`)
})