test-no-cov:
	@mocha
test:
	@./node_modules/.bin/mocha --require blanket  -R travis-cov
test-cov-html:
	mocha --require blanket -R html-cov > coverage.html
browserify-test:
	browserify test.js > testScript.js
	@echo "you should open browserTest.html in your prefered browser"

.PHONY: test test-no-cov test-cov-html browserify-test