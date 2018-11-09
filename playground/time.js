var moment = require('moment')


// var date =new Date()
// console.log(date.getMonth())

// var date = moment();
// date.add(1,'years')
// console.log(date.format('Do/MMM/YYYY'))

// var tim = moment();
// console.log(tim.format('h:m p'))
// console.log(tim.format('hh:mm A'))

var someTimestramp = moment().valueOf();
console.log(someTimestramp);

var createdAt =1234;
var date = moment(createdAt)
console.log(date.format('h:mm a'))