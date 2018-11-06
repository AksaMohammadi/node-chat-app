var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
	it('should generate correct Message objects' , () => {
		var from ='june';
		var text = 'some message';
		var message = generateMessage(from,text)

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	})
})