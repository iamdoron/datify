var ISOStringRegEx = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d)?\d{0,2}Z$/;

(function(){
	var Traverse = require('traverse');

	module.exports = datify;
	module.exports.options = { conservative: true }

	function datify(raw){
		return Traverse.map(raw, function(value){
			if (hasDatifyPotential(value)){
				this.update(datifyString(value));
			}
		});
	};	

	function hasDatifyPotential(value){
		return (typeof value === 'string') && (module.exports.options.conservative ? ISOStringRegEx.test(value): true)
	};

	function datifyString(raw){
		var parsedDate = Date.parse(raw);
		if (parsedDate) {
			return new Date(parsedDate);
		}
		else {
			return raw;
		}
	};
})()
