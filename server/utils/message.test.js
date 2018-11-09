var expect = require('expect');
var {generateMessage , generateLocationMessage} = require('./message.js');

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
		var latitude =15;
		var Longitude =16;
		var url = 'https://www.google.com/maps?q=15,19'
		var message = generateLocationMessage(from,latitude,Longitude)

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});
	})
})

