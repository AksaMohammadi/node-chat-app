var expect = require('expect');
var {generateMessage , generateLocationMessage} = require('./message.js');


// var moment = require('moment')


describe('generateMessage', () => {
	it('should generate correct Message objects' , () => {
		var from ='june';
		var text = 'some message';
		var message = generateMessage(from,text)

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	})
})

describe('generateLocationMessage', () => {
	it('should generate correct Location Message objects' , () => {
		var from ='Nov';
		var latitude =80.804546;
		var Longitude =16.5378476;
		var url = 'https://www.google.com/maps?q=80.804546,16.5378476'
		// var createdAt= moment().valueOf()
		var message = generateLocationMessage(from,latitude,Longitude)
		// console.log("+++++++++++++++++++++++++++++++")
		// console.log(message)

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});
	})
})

