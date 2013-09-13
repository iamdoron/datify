datify
======

datify your objects.

[![Build Status](https://travis-ci.org/iamdoron/datify.png?branch=master)](https://travis-ci.org/iamdoron/datify)

## how

`> npm install datify`

```javascript
Datify = rquire('datify');

Datify('2011-09-13T17:09:30.909Z').should.eql(new Date('2011-09-13T17:09:30.909Z'));

Datify("not a date").should.eql("not a date");

Datify({a: {b: '2011-09-13T17:09:30.909Z'}, c:32})
.should.eql({a: {b: new Date('2011-09-13T17:09:30.909Z')}, c:32});
```
## why
Suppose you are building an API, and you receive a JSON. You want to parse & save that JSON to the 
DB - but your dates are strings (the JSON way). So what you do is store the datifyed version. You might:
```javascript
collection.insert(datify(JSON.parse(payload)), function(){ /* do something*/ });
```

## test
```sh
> npm install
> make test
```
