module.exports = function(raw){
	var parsedDate = Date.parse(raw);
	if (!parsedDate) {
		parsedDate = raw;
	}
	return parsedDate;
};