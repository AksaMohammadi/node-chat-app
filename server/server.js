const path= require('path');
const express = require('express')
const http = require ('http')
const socketIO = require('socket.io')
// console.log(__dirname, '/../public')

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
// console.log(publicPath)
const app = express();

var server = http.createServer(app)
var io = socketIO(server)
app.use(express.static(publicPath))

io.on('connection',(socket)=>{
	console.log('new connection');

socket.emit('newMessage',{
	from : 'Admin',
	text : 'welcome to the chat app'
})	
	
socket.broadcast.emit('newMessage',{
	from : 'Admin',
	text : 'New user joined',
	createdAt : new Date().getTime()
})	

socket.on('createMessage',(message) => {
	console.log('createMessage',message)
// io.emit('newMessage',{
// 	from : message.from,
// 	text : message.text,
// 	createdAt : new Date().getTime()
// });

socket.broadcast.emit('newMessage',{
	from : message.from,
	text : message.text,
	createdAt : new Date().getTime()
})	
});
socket.on('disconnect',() => {

			console.log('user made disconnection')
		});
})


server.listen(port, () => {
	console.log(`server is now ready to be used at ${port}`)
})


