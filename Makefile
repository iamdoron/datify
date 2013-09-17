test-no-cov:
	@mocha
test:
	@./node_modules/.bin/mocha --require blanket  -R travis-cov
test-cov-html:
	mocha --require blanket -R html-cov > coverage.html

.PHONY: test test-no-cov test-cov-html