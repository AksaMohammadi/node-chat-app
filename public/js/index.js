var socket = io();

		socket.on('connect',function() {
			console.log('yeah done....conection is made to server')

			socket.emit('createMessage',{
				from : 'zapoj@zapoj.com',
				text : 'yeah that works'
			})

		})


		socket.on('disconnect',function() {

			console.log('yeah... disconnected from server')
		})

		socket.on('newMessage',function(message) {
			
			console.log('newMessage',message)
			
		})