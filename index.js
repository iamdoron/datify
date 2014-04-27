
(function(){
	var Traverse = require('traverse');

	var ISOStringRegEx = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/;

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
		var parsedDate = new Date(raw);
		if (!isNaN(parsedDate.getTime())) {
			return parsedDate;
		}
		else {
			return raw;
		}
	};
})()
