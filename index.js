(function(){
	var Traverse = require('traverse');

	module.exports = datify;

	function datify(raw){
		return Traverse.map(raw, function(value){
			if (typeof value === 'string'){
				this.update(datifyString(value));
			}
		});
	};	

	function datifyString(raw){
		var parsedDate = Date.parse(raw);
		if (parsedDate) {
			return new Date(parsedDate);
		}
		else {
			return raw;
		}
	}
})()
