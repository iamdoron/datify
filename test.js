var Datify = require('./');
var Chai = require('chai');

Chai.should();

describe('datify', function(){
	it('should convert an ISO Date string to the right date', function(done){
		Datify('2011-09-13T17:09:30.909Z').should.eql(new Date('2011-09-13T17:09:30.909Z'));
		Datify('2011-09-13T17:09:30.909Z').toISOString().should.eql('2011-09-13T17:09:30.909Z');
		Datify('2011-09-13T17:09:30.909Z').constructor.toString().should.contain('function Date');
		done();
	}),

	it('should keep the string "a message" unchanged', function(done){
		Datify('a message').should.eql("a message");
		done();
	}),

	it('should keep a js Date unchanged', function(done){
		Datify(new Date('2011-09-13T17:09:30.909Z')).should.eql(new Date('2011-09-13T17:09:30.909Z'));
		Datify(new Date('2011-09-13T17:09:30.909Z')).toISOString().should.eql('2011-09-13T17:09:30.909Z');
		done();
	}),

	it('should convert an object with an ISO date string to an object with Date', function(done){
		var anObject = {
			content: { },
			createdAt: '2011-09-13T17:12:30.909Z'
		}
		Datify(anObject).should.eql({
			content: { },
			createdAt: new Date('2011-09-13T17:12:30.909Z')
		});

		done();
	}),

	it('should return a different object then the one it was converting', function(done){
		var anObject = {
			content: { },
			createdAt: '2011-09-13T17:12:30.909Z'
		}
		Datify(anObject).should.not.equal(anObject);

		done();
	}),

	it('should convert an object with nested ISO date strings to an object with Dates', function(done){
		var anObject = {
			number: 3441,
			date: new Date(),
			content: { createdAt: '2011-10-13T17:12:30.909Z', i: {am: {losing: {it: '2011-10-13T17:12:30.929Z', yep: "i am"}}}},
			createdAt: '2011-09-13T17:12:30.909Z'
		}
		Datify(anObject).should.eql({
			number: 3441,
			date: anObject.date,
			content: { createdAt: new Date('2011-10-13T17:12:30.909Z'), i: {am: {losing: {it: new Date('2011-10-13T17:12:30.929Z'), yep: "i am"}}}},
			createdAt: new Date('2011-09-13T17:12:30.909Z')
		});

		done();
	}),

	it('should convert an array of Dates', function(done){
		var anArrayOfDates = ['2011-10-13T17:12:30.909Z', '2011-10-13T17:12:30.909Z', '2012-10-13T17:12:30.909Z']
		Datify(anArrayOfDates).should.eql([new Date('2011-10-13T17:12:30.909Z'), 
			new Date('2011-10-13T17:12:30.909Z'), new Date('2012-10-13T17:12:30.909Z')]);

		done();
	});
});