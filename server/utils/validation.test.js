const expect = require('expect')

const {isRealString} = require('./validation.js')

describe('isRealString',()=>{
	it('should reject non-string values',() =>{
		var res = isRealString(98);
		expect(res).toBe(false)
	})
	it('should reject string with only spaces',()=>{
		var res = isRealString('  ')
		expect(res).toBe(false)
	})

	it('should allow sring with non-spaces characters',()=>{
		var res = isRealString('  aqsa  ');
		expect(res).toBe(true)
	})

})