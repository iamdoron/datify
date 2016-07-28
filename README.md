datify
======

datify your objects.

[![Build Status](https://travis-ci.org/iamdoron/datify.png?branch=master)](https://travis-ci.org/iamdoron/datify)

[![Browser Build Status](http://ci.testling.com/iamdoron/Datify.png)](http://ci.testling.com/iamdoron/datify)

## how

`> npm install datify`

```javascript
const Datify = require('datify');

Datify('2011-09-13T17:09:30.909Z').should.eql(new Date('2011-09-13T17:09:30.909Z'));

Datify("not a date").should.eql("not a date");

Datify({a: {b: '2011-09-13T17:09:30.909Z'}, c:32})
.should.eql({a: {b: new Date('2011-09-13T17:09:30.909Z')}, c:32});
```
### non-conservative
Datify, by default, will parse only simple ISO strings (`'2011-09-13T17:09:30.909Z'`, `'2011-09-13T17:09:30Z'`), it has a mode where everything that can be parsed to Date is parsed to date.
Just:
```javascript
Datify.options.conservative = false
```
And then:
```javascript
Datify("2000").toISOString().should.eql('2000-01-01T00:00:00.000Z');
```
## why
Suppose you are building an API, and you receive a JSON. You want to parse & save that JSON to the 
DB - but your dates are strings (the JSON way). So what you do is store the datifyed version. You might:
```javascript
collection.insert(datify(JSON.parse(payload)), function(){ /* do something*/ });
```

Suppose you are using an API (from the browser, for example), that have dates in it, as strings (it is JSON, after all) - you just datify it.
```javascript
apiResult = datify(apiResult);
```

## test
```sh
> npm install
> make test
```

## test on your favorite browser
```sh
> npm install
> make browserify-test
```
open browserTest.html in your favorite browser, for example:
```sh
> firefox ./browserTest.html 
```
