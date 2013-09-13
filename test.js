var Datify = require('./');

var Lab = require('lab');
var Chai = require('chai');

Chai.should();
var it = Lab.test;

Lab.experiment('datify', function(){
	it('should convert an ISO Date string to the right date', function(done){
		console.log(Datify);
		Datify('2011-09-13T17:09:30.909Z').should.eql(new Date('2011-09-13T17:09:30.909Z'));
		done();
	});
});