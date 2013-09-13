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

## test
```sh
> npm install
> make test
```
