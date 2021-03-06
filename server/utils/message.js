var moment = require('moment')
var generateMessage = (from,text) => {
	return {
		from,
		text,
		createdAt : moment().valueOf()
		// createdAt : moment().valueOf()	
	}
}

var generateLocationMessage = (from ,latitude,longitude) => {
	return {
		from,
		url:`https://www.google.com/maps?q=${latitude},${longitude}`,
		createdAt : moment().valueOf()
		// createdAt : new Date().getTime()
}
}
module.exports = {generateMessage , generateLocationMessage};